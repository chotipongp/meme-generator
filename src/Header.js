import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header>
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="problem?"
        />
        <p> Meme Fenerator </p>
      </header>
    );
  }
}

export default Header;
