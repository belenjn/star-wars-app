import { strings } from "../../utils/strings";
import "./Footer.css";
import React from 'react'

export const Footer = () => {
  return (
    <div>
      <p className="footer-text">{strings.footer_text}</p>
      <div className="container__text">
        <p className="container__text--name">Belén JN - 2022</p>
      </div>
    </div>
  );
};
