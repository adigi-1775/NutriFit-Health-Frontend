import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import NutritionList from "./components/nutrition-list.component";
import EditNutrition from "./components/edit-nutrition.component";
import CreateNutrition from "./components/create-nutrition.component";
import CreateUser from "./components/create-user.component";
import HomePage from "./components/HomePage"
import Login from "./components/Authentication/Login"
import Register from "./components/Authentication/Register"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br/>
          <Switch>
              <Route path="/edit-exercise/:id" component ={EditExercise} />
              <Route path="/edit-nutrition/:id" component ={EditNutrition} />
              <Route path="/create-exercise" component ={CreateExercise} />
              <Route path="/create-nutrition" component ={CreateNutrition} />
              <Route path="/user" component ={CreateUser} />
              <Route path="/nutrition" component ={NutritionList} />
              <Route path="/exercise" component ={ExerciseList} />
              <Route path="/login" component ={Login} />
              <Route path="/register" component ={Register} />
              <Route path="/" component ={HomePage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
