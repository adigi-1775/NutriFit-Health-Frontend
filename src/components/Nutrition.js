import React, { Button } from 'react';
import { Link } from 'react-router-dom';

export default function Nutrition(props){
  return(
    <tr>
      <td>{props.nutrition.username}</td>
      <td>{props.nutrition.meal}</td>
      <td>{props.nutrition.description}</td>
      <td>{props.nutrition.calories}</td>
      <td>
        <Link to={"/edit/"+props.nutrition._id}>Edit Nutrition</Link> |
        <Button onClick={() => { props.deleteNutrition(props.nutrition._id) }}>Delete Nutrition</Button>
      </td>
    </tr>
)}
