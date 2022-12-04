import React from "react";
import "../../css/Header/Header.css";
import { Words } from "../../words";
const Header = () => {
  return (
    <header>
      <h1>{Words.header}</h1>
    </header>
  );
};

export default Header;
