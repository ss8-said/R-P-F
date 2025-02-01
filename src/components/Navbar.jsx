import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Make sure to link your CSS file

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home"); // Default active section

  // Function to detect active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section"); // Select all sections
    let currentSection = "home"; // Default section

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <a href="#home" className="logo">Portfolio.</a>
      <ul>
        <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
        <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
        <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>Portfolio</a></li>
        <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
