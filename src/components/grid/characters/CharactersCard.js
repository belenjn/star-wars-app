import { useState } from "react";
import "./CharactersCard.css";
import React from 'react'



export const CharactersCard = ({ character }) => {

  const [isShown, setisShown] = useState(false)

  const imageUrl = character.image;

  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    height: "350px",
    width: "240px"
   
  }
   
  return (
    <li className="characters__card">
  
      {!isShown && (

        <div 
        className="img__wrap" 
        to={"/characters/" + character.id} 
        style={containerStyle} 
        onMouseEnter={() => setisShown(true)}>
        </div>
      )}
    

      {isShown && (
        <div className="hover__info"  
        onMouseLeave={() => setisShown(false)}
        >

        <ul>

        <li><strong>Gender: </strong> {character.gender}</li>
        <li><strong>Height: </strong>{character.height}</li>
        <li><strong>Species: </strong>{character.species}</li>
        <li><strong>More info: </strong><a  href={character.wiki} target="_blank" rel="noopener noreferrer">{character.wiki}</a></li>

        </ul>
       
        </div>
      )}
      
      <div>{character.name}</div>
      
    </li>
  );
};

