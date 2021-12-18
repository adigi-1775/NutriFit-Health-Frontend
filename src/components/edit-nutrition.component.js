import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, Redirect } from 'react-router-dom';

export default function EditNutrition(props) {
  const {id} = useParams()
  const [postComplete, setPostComplete] = useState(false)
  const [body, setBody] = useState({
    username: '',
    meal: '',
    description: '',
    calories: 0
  })
  function onChangeUpdateBody(e){
    const copyBody = {...body, [e.target.name]:e.target.value}
    setBody(copyBody)
  }
  function onSubmit(e) {
    e.preventDefault();
    axios.put(process.env.REACT_APP_BACKEND_URL + `/nutrition/update/${id}`, body)
      .then(res =>
        {
          console.log(res)
          setPostComplete(true)
      });
  }
  return (
    <div>
    {postComplete && <Redirect to='/nutrition' />}
      <h1 className="text-white text-center">Edit Nutrition Log</h1><br />
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
          <label className="text-white">Meal: </label>
          <input  type="text"
              name="meal"
              required
              className="form-control opacity-75"
              value={body.meal}
              onChange={onChangeUpdateBody}
              />
        </div><br />
         <br /><div className="form-group">
          <label className="text-white">Calories: </label>
          <input
              type="text"
              name="calories"
              className="form-control opacity-75"
              value={body.calories}
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
