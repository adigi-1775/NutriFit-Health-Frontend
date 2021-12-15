import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.element";
import EditExercise from "./components/edit-exercise.element";
import CreateExercise from "./components/create-exercise.element";
import NutritionList from "./components/nutrition-list.element";
import EditNutrition from "./components/edit-nutrition.element";
import CreateNutrition from "./components/create-nutrition.element";
import CreateUser from "./components/create-user.element";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br/>
              <Route path="/home" component ={HomePage} />
              <Route path="/user" component ={CreateUser} />
              <Route path="/nutrition" exact component ={NutritionList} />
              <Route path="/exercise" exact component ={ExerciseList} />
              <Route path="/edit-exercise/:id" component ={EditExercise} />
              <Route path="/edit-nutrition/:id" component ={EditNutrition} />
              <Route path="/create-exercise" component ={CreateExercise} />
              <Route path="/create-nutrition" component ={CreateNutrition} />
      </div>
      <div className="About">
        <h2>About</h2>
        <p>Welcome to NutriFit-Health! We want to spread the importance of nutrition and fitness in relation to personal health. Create yourself a username and explore our reccomendations of exercises and nutrition. Feel free to add your own exercises and nutritious meals!</p>
      </div>
    </Router>

  );
}

export default App;
