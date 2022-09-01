import "./MoviesCard.css";

import React from 'react'

export const MoviesCard = ({ movie }) => {
    return (
      <div className="movies__card">
          <h2 className="movie__title">{movie.title}</h2>
          <ul className="movies__card--list">
          
          <li><strong>Director: </strong>{movie.director} </li>
          <li><strong>Release Date: </strong>{movie.release_date} </li>
  
          </ul>
      </div>
    );
  };
  
