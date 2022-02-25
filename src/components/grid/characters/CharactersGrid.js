import { strings } from "../../../utils/strings";
import { CharactersCard } from "./CharactersCard";
import {BsArrowRight} from "react-icons/bs";
import {BsArrowLeft} from "react-icons/bs"
import "./CharactersGrid.css";
import React, { useState } from "react";

export const CharactersGrid = ({ filterName, characters}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage(currentPage + 12);
  };

  
  const prevPage = () => {
    if (currentPage > 0){
      setCurrentPage(currentPage - 12)};
  }

  const regExp = new RegExp(filterName, "gi");

  const pageResults = characters.slice(currentPage, currentPage + 12);

  const filterResults = characters.filter((character) => 
    regExp.test(character.name)
  )


  if (filterResults.length === 0)
    return <h2 className="alert">{strings.try_again}</h2>;

  if (filterResults.length !== characters.length){
    
    return   <ul className="characters__grid">
    {filterResults.map((character) => (
      <CharactersCard key={character.id} character={character} />
    ))}   
    </ul> 
  }

  return (

    <div>
      <ul className="characters__grid">
        {pageResults.map((character) => (
          <CharactersCard key={character.id} character={character} />
        ))}   
        </ul> 
        
        <div className="buttons__container">
          <button 
          className="page__button"
          onClick={prevPage}
          >
          <BsArrowLeft size={25}/>
          </button>

          &nbsp;

          <button 
          className="page__button" 
          onClick={nextPage}>
            <BsArrowRight size={25}/>
          </button>
        </div>
   
   </div>

  );
};
