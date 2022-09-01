import "./Movies.css";
import { MoviesGrid } from "../../components/grid/movies/MoviesGrid";
import { strings } from "../../utils/strings";


import React from 'react'


export const Movies = () => {
  return(
    <div>
    <h1 className='title'>{strings.title_movies}</h1>
    <MoviesGrid/>
    </div>
  )
}

