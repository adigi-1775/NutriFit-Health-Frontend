import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component'";
import EditExercise from "./components/edit-exercise.component'";
import CreateExercise from "./components/create-exercise.component'";
import NutritionList from "./components/nutrition-list.component'";
import EditNutrition from "./components/edit-nutrition.component'";
import CreateNutrition from "./components/create-nutrition.component'";
import CreateUser from "./components/create-user.component'";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br/>
              <Route path="/user" component={CreateUser} />
              <Route path="/" exact component={NutritionList} />
              <Route path="/" exact component={ExerciseList} />
              <Route path="/edit/:id" component={EditExercise} />
              <Route path="/edit/:id" component={EditNutrition} />
              <Route path="/create" component={CreateExercise} />
              <Route path="/create" component={CreateNutrition} />
      </div>
      <div className="About">
        <h2>About</h2>
        <p>Welcome to NutriFit-Health! We want to spread the importance of nutrition and fitness in relation to personal health. Create yourself a username and explore our reccomendations of exercises and nutrition. Feel free to add your own exercises and nutritious meals!</p>
      </div>
    </Router>

  );
}

export default App;
