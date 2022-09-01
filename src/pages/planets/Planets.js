import { PlanetsGrid } from "../../components/grid/planets/PlanetsGrid";
import { strings } from "../../utils/strings";
import "./Planets.css";
import React from 'react'



export const Planets = () => {
  return (
    <div>
      <h1>{strings.title_planets}</h1>
      <PlanetsGrid/>
    </div>
  );
};

