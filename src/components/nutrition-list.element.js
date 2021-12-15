import React, { Component, Button } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Nutrition from './Nutrition';

const Nutrition = props => (
  <tr>
    <td>{props.nutrition.username}</td>
    <td>{props.nutrition.exerciseName}</td>
    <td>{props.nutrition.description}</td>
    <td>{props.nutrition.duration}</td>
    <td>
      <Link to={"/edit/"+props.nutrition._id}>edit</Link> | <Button onClick={() => { props.deleteNutrition(props.nutrition._id) }}>delete</Button>
    </td>
  </tr>
)

  export default class NutritionList extends Component {
    constructor(props) {
    super(props);
    this.deleteNutrition = this.deleteNutrition.bind(this);
    this.state = {nutrition: []};
  }
  componentDidMount() {
    axios.get('http://localhost:5000/nutrition/')
     .then(response => {
       console.log(response.data)
       this.setState({ nutrition: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  deleteNutrition(id) {
    axios.delete('http://localhost:5000/nutrition/'+id)
      .then(res => console.log(res.data));
    this.setState({
      nutrition: this.state.nutrition.filter(el => el._id !== id)
    })
  }
  nutritionList() {
    return this.state.nutrition.map(currentnutrition => {
      return <Nutrition nutrition={currentnutrition} deleteNutrition={this.deleteNutrition} key={currentnutrition._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Nutrition</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Meal</th>
              <th>Description</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            { this.nutritionList() }
          </tbody>
        </table>
      </div>
    )
  }
}
