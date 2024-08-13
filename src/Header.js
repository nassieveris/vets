import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import './assets/css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}

export default Header;
