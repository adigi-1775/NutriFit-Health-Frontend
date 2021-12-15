import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
  constructor(props) {
  super(props);
  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
  this.onChangeDescription = this.onChangeDescription.bind(this);
  this.onChangeDuration = this.onChangeDuration.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.state = {
    username: '',
    exerciseName: '',
    description: '',
    duration: 0,
    users: [],
  }
}

componentDidMount() {
    axios.get('http://localhost:5000/user/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({
        user: response.data.map(user => user.username),
        username: response.data[0].username
      });
    }
  })
  .catch((error) => {
    // console.log(error);
})}


onChangeUsername(e) {
  this.setState({
    username: e.target.value
  });
}
onChangeExerciseName(e) {
  this.setState({
    exerciseName: e.target.value
  });
}
onChangeDescription(e) {
  this.setState({
    description: e.target.value
  });
}
onChangeDuration(e) {
  this.setState({
    duration: e.target.value
  });
}
onSubmit(e) {
  e.preventDefault();
  const exercise = {
    username: this.state.username,
    exerciseName: this.state.exerciseName,
    description: this.state.description,
    duration: this.state.duration,
  };
// console.log(exercise);
axios.post('http://localhost:5000/exercise/add', exercise)
  .then(res => console.log(res.data));
window.location = '/';
}

render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group">
            <label>Exercise Name: </label>
            <input
                type="text"
                className="form-control"
                value={this.state.exerciseName}
                onChange={this.onChangeExerciseName}
                />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Duration (in minutes/sets): </label>
            <input
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
