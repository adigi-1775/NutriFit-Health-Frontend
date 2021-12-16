import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Image from 'react-bootstrap/Image';
// import Nutrition from './Nutrition.js';

  export default class NutritionList extends Component {
    constructor(props) {
    super(props);
    this.deleteNutrition = this.deleteNutrition.bind(this);
    this.state = {nutrition: []};
  }
  componentDidMount() {
    // console.log(Nutrition);
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
      <div class="text-center" >
        <h3>Logged Nutrition</h3><br />
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
            {this.state.nutrition.map((item) => {
              console.log(item);
              return(
              <tr>
                <td>{item.username}</td>
                <td>{item.meal}</td>
                <td class="table-primary">{item.description}</td>
                <td>{item.calories}</td>
                <td>
                  <Link className="btn bg-info text-light font-welcome-buttons" to={"/edit/"+item._id}>Edit</Link></td>
                  <td><button className="btn bg-danger text-light font-welcome-buttons" onClick={() => { this.deleteNutrition(item._id) }}>Delete</button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    )
  }
}
