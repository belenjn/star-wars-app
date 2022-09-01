import { useEffect, useState } from "react";
import { strings } from "../../../utils/strings";
import  {PlanetsCard}  from "./PlanetsCard";
import "./PlanetsGrid.css";
import React from 'react'

export const PlanetsGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((results) => {
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
    <ul className="planets__grid">
      {
        results.map( planet => (
        
         <PlanetsCard key={planet.name} planet={planet} />
        ))
      }
      
    </ul>
    
  );
};
