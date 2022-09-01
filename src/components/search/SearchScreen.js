import "./SearchScreen.css";
import { BiSearchAlt } from "react-icons/bi";
import {RiDeleteBin5Line} from "react-icons/ri"
import { useState } from "react";
import React from 'react'


export const SearchScreen = ({setKeyword}) => {

  const [value, setValue] = useState('');


  const handleChange = (e) => setValue(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(value);
  }

  return (
    <form className="search__container" onSubmit={handleSearch}>
      <div className="search__box">

        <input 
        className="search__input" 
        type="text"
        onChange={handleChange} 
        value={value}
      
        />

        <button className="search__button" type="submit">
          <BiSearchAlt size={20} />
        </button>

     
      </div>
      
      <div className="delete__container">
    
        <button className="delete__button" type="submit" onClick={ () => setValue( () => "")}>
          <RiDeleteBin5Line size={20} />
        </button>

      
        </div>
   
    </form>
  );
};
