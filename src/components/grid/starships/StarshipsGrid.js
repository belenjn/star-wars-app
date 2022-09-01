import { useEffect, useState } from "react";
import { strings } from "../../../utils/strings";
import { StarshipsCard } from "./StarshipsCard";
import './StarshipsGrid.css'
import React from 'react'


export const StarshipsGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
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
    <ul className="starships__grid">
      {results.map(starship => (
            <StarshipsCard key={starship.name} starship={starship}/>
            ))}
    </ul>
  );

}