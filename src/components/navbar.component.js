import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  render() {
    return (
    <div className="collpase navbar-collapse d-flex justify-content-evenly">  
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/HomePage" className="navbar-brand">NutriFit-Health</Link>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/exercise" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/nutrition" className="nav-link">Nutrition</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create-exercise" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create-nutrition" className="nav-link">Create Nutrition Log</Link>
          </li><br />
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
  }
}
