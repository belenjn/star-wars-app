import { useEffect, useState } from "react";
import { strings } from "../../../utils/strings";
import { MoviesCard } from "./MoviesCard";
import './MoviesGrid.css'
import React from 'react'


export const MoviesGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((results) =>{
      setResults(results.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="title">
        <h1>{strings.loading}</h1>
      </div>
    );
  }
  return (
    <ul className="movies__grid">
      {results.map(movie => (
            <MoviesCard key={movie.name} movie={movie}/>
            ))}
    </ul>
  );

}
