import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
  super(props);
  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.state = {
    username: ''
  };
}
componentDidMount() {
    this.props.setbgimage('images/greensmoothi.jpg')
}
onChangeUsername(e) {
  this.setState({
    username: e.target.value
  });
}
onSubmit(e) {
  e.preventDefault();
  const newUser = {
    username: this.state.username,
  };
  // console.log(newUser);
  axios.post('https://nutrifit-health-backend.herokuapp.com/user/add', newUser)
  .then(res => console.log(res.data));
  this.setState({
    username: ''
  })
}
  render() {
    return (
      <div className="text-center"><br />
        <br /><h1>Create New User</h1><br />
        <p className="fs-5">Create a unique username to show off your nutrition and fitness knowledge! Your username will be displayed with all the information you post in our logs!</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <br /><label className="fs-2">Username: </label>
            <input  type="text"
                placeholder="Enter username"
                required
                className="form-control opacity-75"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div><br />
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
