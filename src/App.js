import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import NutritionList from "./components/nutrition-list.component";
import EditNutrition from "./components/edit-nutrition.component";
import CreateNutrition from "./components/create-nutrition.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br/>
            <Routes>
              <Route path="/" exact component={ExerciseList} />
              <Route path="/edit/:id" component={EditExercise} />
              <Route path="/create" component={CreateExercise} />
              <Route path="/" exact component={NutritionList} />
              <Route path="/edit/:id" component={EditNutrition} />
              <Route path="/create" component={CreateNutrition} />
              <Route path="/user" component={CreateUser} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
