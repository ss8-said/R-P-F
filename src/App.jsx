import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Chatbot />
    </>
  );
};

export default App;
