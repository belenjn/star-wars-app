import React from 'react'

import "./StarshipsCard.css";

export const StarshipsCard = ({ starship }) => {
  return (
    <div className="starship__card">
        <h2>{starship.name}</h2>
        <ul className="starship__card--list">
        
        <li><strong>Model: </strong>{starship.model}</li>
        <li><strong>Crew: </strong>{starship.crew} </li>
        <li><strong>Passengers: </strong>{starship.passengers} </li>

        </ul>
    </div>
  );
};

