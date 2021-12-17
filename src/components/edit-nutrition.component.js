import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class EditNutrition extends Component {
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
      users: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/edit-nutrition/:id' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          meal: response.data.meal,
          description: response.data.description,
          calories: response.data.calories,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:5000/user/')
      .then(response => {
        this.setState({ user: response.data.map(user => user.username) });
      })
      .catch((error) => {
        console.log(error);
      })
  }
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
  onChangeCaloreis(e) {
    this.setState({
      calories: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const nutrition = {
      username: this.state.username,
      meal: this.state.meal,
      description: this.state.description,
      calories: this.state.calories,
    };
    console.log(nutrition);
    axios.post('http://localhost:5000/nutrition/update/'+this.props.match.params.id, nutrition)
      .then(res => console.log(res.data));
    window.location = '/';
  }
  render() {
    return (
      <div>
        <h1>Edit Nutrition Log</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <label>Meal: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.meal}
                onChange={this.onChangeMeal}
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
            <label>Calories: </label>
            <input
                type="text"
                className="form-control"
                value={this.state.calories}
                onChange={this.onChangeCaloreis}
                />
          </div><br />
          <div className="form-group">
            <input type="submit" value="Edit Nutrition Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}