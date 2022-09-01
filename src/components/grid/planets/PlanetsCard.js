import "./PlanetsCard.css";
import React from 'react'

export const PlanetsCard = ({ planet }) => {

  return (
    <div className="planets__card">
        <h2>{planet.name}</h2>
        <ul className="planets__card--list">
        
        <li><strong>Name: </strong>{planet.name}</li>
        <li><strong>Diameter: </strong>{planet.diameter} </li>
        <li><strong>Terrain: </strong>{planet.terrain} </li>

        </ul>
    </div>
    
    
  );
};

