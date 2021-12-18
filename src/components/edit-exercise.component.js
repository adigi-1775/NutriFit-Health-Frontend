import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, Redirect } from 'react-router-dom';

export default function EditExercise() {
  const {id} = useParams()
  const [postComplete, setPostComplete] = useState(false)
  const [body, setBody] = useState({
    username: '',
    exerciseName: '',
    description: '',
    duration: 0
  })
  function onChangeUpdateBody(e){
    const copyBody = {...body, [e.target.name]:e.target.value}
    setBody(copyBody)
  }
  function onSubmit(e) {
    e.preventDefault();
    axios.put(`https://thawing-dawn-15827.herokuapp.com/exercise/update/${id}`, body)
      .then(res =>
        {
          console.log(res)
          setPostComplete(true)
      });
  }
  return (
    <div>
    {postComplete && <Redirect to='/exercise' />}
      <h1 className="text-white text-center">Edit Exercise Log</h1><br />
      <br /><form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="text-white">Username: </label>
          <input  type="text"
              name="username"
              required
              className="form-control opacity-75"
              value={body.username}
              onChange={onChangeUpdateBody}
              />
        </div><br />
        <br /><div className="form-group">
          <label className="text-white">Description: </label>
          <input  type="text"
              name="description"
              required
              className="form-control opacity-75"
              value={body.description}
              onChange={onChangeUpdateBody}
              />
        </div><br />
        <br /><div className="form-group">
          <label className="text-white">Exercise Name: </label>
          <input  type="text"
              name="exerciseName"
              required
              className="form-control opacity-75"
              value={body.exerciseName}
              onChange={onChangeUpdateBody}
              />
        </div><br />
         <br /><div className="form-group">
          <label className="text-white">Duration (in minutes/sets): </label>
          <input
              type="text"
              name="duration"
              className="form-control opacity-75"
              value={body.duration}
              onChange={onChangeUpdateBody}
              />
        </div><br />
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  )
}
