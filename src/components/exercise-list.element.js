import React, { Component, Button  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Exercise from './Exercise.js';

export default class ExerciseList extends Component {
  constructor(props) {
  super(props);
  this.deleteExercise = this.deleteExercise.bind(this);
  this.state = {exercises: []};
}
  componentDidMount() {
    axios.get('http://localhost:5000/exercise/')
     .then(response => {
       this.setState({ exercise: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercise/'+id)
      .then(res => console.log(res.data));
    this.setState({
      exercise: this.state.exercise.filter(el => el._id !== id)
    })
  }
  exerciseList() {
    return this.state.exercise.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Exerside Name</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}
