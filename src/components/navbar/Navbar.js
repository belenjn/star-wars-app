import React from "react";
import { strings } from "../../utils/strings";
import { NavLink } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";


import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
    <div className="icons__container">
        <a className="icons" href="https://www.linkedin.com/in/bel%C3%A9n-j-3bb2401a9/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>

      <a className="icons" href="https://github.com/belenjn" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>

      <a className="icons" href="https://twitter.com/be_dev_" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
      
      <NavLink className="menu" to="/">{strings.characters}</NavLink>

      <NavLink className="menu" to="/movies">{strings.movies}</NavLink>

      <NavLink className="menu" to="/planets">{strings.planets}</NavLink>

      <NavLink className="menu" to="/starships">{strings.starships}</NavLink>

    </nav>
  );
};
