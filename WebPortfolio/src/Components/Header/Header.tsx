import React from "react";
import "./HeaderStyling.css";
import { useContext } from "react";
import { globalContext } from "../../App";

const Header = () => {
  const context = useContext(globalContext);

  return (
    <header className="header">
      <div className="navbar-guide">
        <div className="logo-wrapper">
          <h1>R</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>About me</li>
            <li>My work</li>
            <li>Contact me</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
