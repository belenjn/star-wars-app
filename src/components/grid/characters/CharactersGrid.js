import { strings } from "../../../utils/strings";
import { CharactersCard } from "./CharactersCard";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "./CharactersGrid.css";
import characters from "../../../api/characters.json";
import React, { useState } from "react";
import { SearchScreen } from "../../search/SearchScreen";
import title from "../../../images/starwars--title.png";
import laser from "../../../images/sable_laser.png";

export const CharactersGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const nextPage = () => {
    setCurrentPage(currentPage + 12);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 12);
    }
  };

  const regExp = new RegExp(keyword, "gi");

  const pageResults = characters.slice(currentPage, currentPage + 12);

  const filterResults = characters.filter((character) =>
    regExp.test(character.name)
  );

  if (filterResults.length === 0)
    return <h2 className="alert">{strings.try_again}</h2>;

  if (filterResults.length !== characters.length) {
    return (
      <ul className="characters__grid">
        {filterResults.map((character) => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <a className="enlace__imagen" href="/">
        <img className="star_wars--items" src={title} alt="star wars title" />
      </a>

      <img className="star_wars--items" src={laser} alt="sable" />
      <h1 className="title">{strings.title_characters}</h1>
      <SearchScreen setKeyword={setKeyword} />
      <ul className="characters__grid">
        {pageResults.map((character) => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </ul>

      <div className="buttons__container">
        <button className="page__button" onClick={prevPage}>
          <BsArrowLeft size={25} />
        </button>
        &nbsp;
        <button className="page__button" onClick={nextPage}>
          <BsArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};
