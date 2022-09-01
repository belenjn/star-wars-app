import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import React from "react";
import {Route, HashRouter} from "react-router-dom";
import { Movies } from "./pages/movies/Movies";
import { Planets } from "./pages/planets/Planets";
import { Starships } from "./pages/starships/Starships";

import { CharactersGrid } from "./components/grid/characters/CharactersGrid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Route exact path="/" element={<CharactersGrid />} />
        <Route path="/movies"  element={<Movies />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
      </HashRouter>
      
      <Footer />
    </div>
  );
}

export default App;
