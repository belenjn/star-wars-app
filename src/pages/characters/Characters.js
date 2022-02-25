import { CharactersGrid } from "../../components/grid/characters/CharactersGrid";
import { SearchScreen } from "../../components/search/SearchScreen";
import { strings } from "../../utils/strings";
import characters from "../../api/characters.json";
import "./Characters.css";
import React, { useState } from 'react'



export const Characters = () => {

  const [keyword, setKeyword] = useState('');


  return (
    <div>
      <h1 className='title'>{strings.title_characters}</h1>
      <SearchScreen setKeyword={setKeyword}/>
      <CharactersGrid characters={characters} filterName={keyword}/>


      </div>

  );
};


