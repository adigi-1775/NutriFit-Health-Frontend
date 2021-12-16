import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
// import Exercise from './Exercise.js';

  export default class ExerciseList extends Component {
    constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {exercise: []};
  }
  componentDidMount() {
    // console.log(Nutrition);
    axios.get('http://localhost:5000/nutrition/')
     .then(response => {
       console.log(response.data)
       this.setState({ exercise: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  deleteExercise(id) {
    console.log(id);
    axios.delete('http://localhost:5000/exercise/'+id)
      .then(res => console.log(res.data));
    this.setState({
      exercise: this.state.exercise.filter(el => el._id !== id)
    })
  }
  // exerciseList() {
  //   return this.state.exercise.map(currentexercise => {
  //     return <Exercise
  //     exercise={currentexercise}
  //     deleteExercise={this.deleteExercise}
  //     key={currentexercise._id}/>;
  //   })
  // }
  render() {
    console.log('heres our exercise state');
    console.log(this.state.exercise);
    return (
      <div class="text-center">
        <h3>Logged Exercises</h3><br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Exersise Name</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercise.map((item) => {
              // console.log(item.exerciseName);
              // console.log(item.description);
              // console.log(item.duration);
              return(
              <tr>
                <td>{item.username}</td>
                <td>{item.exerciseName}</td>
                <td>{item.description}</td>
                <td>{item.duration}</td>
                <td>
                  <Link className="btn bg-info text-light font-welcome-buttons" to={"/edit-exercise/:id"+item._id}>Edit</Link></td><br />
                  <br />
                  <td><button className="btn bg-danger text-light font-welcome-buttons" onClick={() => { this.deleteExercise(item._id)}}>Delete</button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    )
  }
}
