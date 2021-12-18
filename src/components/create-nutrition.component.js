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
    this.props.setbgimage('images/prep.jpg')
    axios.get('https://thawing-dawn-15827.herokuapp.com/user/')
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
axios.post('https://thawing-dawn-15827.herokuapp.com/nutrition/add', exercise)
  .then(res => console.log(res.data));
window.location = '/';
}
render() {
    return (
      <div><br />
        <br /><h1 className="text-white text-center">Create New Nutrition Log</h1>
        <br /><form onSubmit={this.onSubmit}>
          <div className="form-group">
            <br /><label className="fs-5 text-white">Username: </label>
            <input
                type="text"
                className="form-control opacity-75"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <br /><label className="fs-5 text-white">Nutrition Name: </label>
            <input
                type="text"
                className="form-control opacity-75"
                value={this.state.meal}
                onChange={this.onChangeMeal}
                />
          </div>
          <div className="form-group">
            <br /><label class="fs-5 text-white">Description: </label>
            <input  type="text"
                required
                className="form-control opacity-75"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <br /><label className="fs-5 text-white">Calories: </label>
            <input
                type="text"
                className="form-control opacity-75"
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
