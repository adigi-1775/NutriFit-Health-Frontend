import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
// import healthfood from '/public/images/healthfood.jpg'
// import Nutrition from './Nutrition.js'

  export default class NutritionList extends Component {
    constructor(props) {
    super(props);
    this.deleteNutrition = this.deleteNutrition.bind(this);
    this.state = {nutrition: []};
  }
  componentDidMount() {
    // console.log(Nutrition);
    this.props.setbgimage('images/fruitbowl.jpg')
    axios.get('https://thawing-dawn-15827.herokuapp.com/nutrition')
     .then(response => {
       console.log(response.data)
       this.setState({ nutrition: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  deleteNutrition(id) {
    axios.delete('https://thawing-dawn-15827.herokuapp.com/nutrition/'+id)
      .then(res => console.log(res.data));
    this.setState({
      nutrition: this.state.nutrition.filter(el => el._id !== id)
    })
  }
  // nutritionList(currentnutrition){
  //   console.log(currentnutrition);
  //     return <Nutrition
  //     nutrition={currentnutrition}
  //     deleteNutrition={NutritionList.deleteNutrition}
  //     key={currentnutrition._id}
  //     />;
  //   }
  render() {
    console.log('heres our nutrition state');
    console.log(this.state);
    return (
      <div className="text-center"><br />
        <br /><h1>Logged Nutrition</h1><br />
        <br /><table className="table table-bordered table-success opacity-75">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Meal</th>
              <th>Description</th>
              <th>Calories</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.nutrition.map((item) => {
              return(
              <tr>
                <td>{item.username}</td>
                <td>{item.meal}</td>
                <td>{item.description}</td>
                <td>{item.calories}</td>
                <td>
                  <Link className="btn bg-info text-light font-welcome-buttons text-dark" to={"/edit-nutrition/"+item._id}>Edit</Link></td>
                  <td><button className="btn bg-danger text-light font-welcome-buttons text-dark" onClick={() => { this.deleteNutrition(item._id) }}>Delete</button></td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    )
  }
}
