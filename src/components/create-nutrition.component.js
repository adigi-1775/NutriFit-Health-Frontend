import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateNutrition extends Component {
  constructor(props) {
  super(props);
  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onChangeMeal = this.onChangeMeal.bind(this);
  this.onChangeDescription = this.onChangeDescription.bind(this);
  this.onChangeCalories = this.onChangeCalories.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.state = {
    username: '',
    meal: '',
    description: '',
    calories: 0,
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
onChangeMeal(e) {
  this.setState({
    meal: e.target.value
  });
}
onChangeDescription(e) {
  this.setState({
    description: e.target.value
  });
}
onChangeCalories(e) {
  this.setState({
    calories: e.target.value
  });
}
onSubmit(e) {
  e.preventDefault();
  const exercise = {
    username: this.state.username,
    meal: this.state.meal,
    description: this.state.description,
    calories: this.state.calories,
  };
// console.log(nutrition);
axios.post('http://localhost:5000/nutrition/add', exercise)
  .then(res => console.log(res.data));
window.location = '/';
}
render() {
    return (
      <div>
        <h3>Create New Nutrition Log</h3>
        <br /><form onSubmit={this.onSubmit}>
          <div className="form-group">
            <br /><label>Username: </label>
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
            <br /><label>Nutrition Name: </label>
            <input
                type="text"
                className="form-control"
                value={this.state.meal}
                onChange={this.onChangeMeal}
                />
          </div>
          <div className="form-group">
            <br /><label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <br /><label>Calories: </label>
            <input
                type="text"
                className="form-control"
                value={this.state.calories}
                onChange={this.onChangeCalories}
                />
          </div>

          <br /><div className="form-group">
            <input type="submit" value="Create Nutrition Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
