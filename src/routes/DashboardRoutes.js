import { Routes, Route } from "react-router-dom";
// import { CharactersDetails } from "../components/grid/characters/CharactersDetails";
import { Characters } from "../pages/characters/Characters";
import { Movies } from "../pages/movies/Movies";
import {Planets} from "../pages/planets/Planets"
import { Starships } from "../pages/starships/Starships";
import React from 'react'

export const DashboardRoutes = () => {
  return (
    
        <Routes>
          <Route path="/" exact element={<Characters />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/planets" element={<Planets/>} />
          <Route path="/starships" element={<Starships/>} />
          <Route path="/characters" element={<Characters/>} />
          {/* <Route path="/characters/:characterId" element={<CharactersDetails/>}></Route> */}

        </Routes>
  
  );
};


