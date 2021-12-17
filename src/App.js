import React, { useState } from 'react';
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
  const [bgimage, setbgimage] = useState()
  const makeBGImg = ()=>{
    let url = `url('${bgimage}')`
    return(
      {backgroundImage: url}
    )
  }
  makeBGImg()
  return (
    <div className="bgimage" style={makeBGImg()}>
    <Router>
      <div className="container">
        <Navbar />
          <br/>
          <Switch>
              <Route path="/edit-exercise/:id" ><EditExercise setbgimage={setbgimage} /></Route>
              <Route path="/edit-nutrition/:id" ><EditNutrition setbgimage={setbgimage} /></Route>
              <Route path="/create-exercise" ><CreateExercise setbgimage={setbgimage} /></Route>
              <Route path="/create-nutrition" ><CreateNutrition setbgimage={setbgimage} /></Route>
              <Route path="/user" ><CreateUser setbgimage={setbgimage} /></Route>
              <Route path="/nutrition" ><NutritionList setbgimage={setbgimage} /></Route>
              <Route path="/exercise" ><ExerciseList setbgimage={setbgimage} /></Route>
              <Route path="/login" ><Login setbgimage={setbgimage} /></Route>
              <Route path="/register" ><Register setbgimage={setbgimage} /></Route>
              <Route path="/" ><HomePage setbgimage={setbgimage} /></Route>
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
