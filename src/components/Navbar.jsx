import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <a href="#" className="logo">Portfolio.</a>
      <ul>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
