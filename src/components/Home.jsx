import React from "react";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-info">
        <h1>Said Meziani</h1>
        <h2>
          I'm a 
          <span style={{ "--i": 3 }} data-text="Développeur Chatbots">Développeur Chatbots</span>
          <span style={{ "--i": 2 }} data-text="Développeur Full Stack">Développeur Full Stack</span>
          <span style={{ "--i": 1 }} data-text="Data Analyst">Data Analyst</span>
        </h2>
        <p>
          Je conçois et développe des chatbots intelligents en utilisant le traitement du langage naturel (NLP) et l'intelligence artificielle.
        </p>
        <div className="btn-sci">
          <a href="#" className="btn">Download CV</a>
          <div className="sci">
            <a href="https://github.com/ss8-said"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/said-meziani-8282a6bb/"><i className="bx bxl-linkedin-square"></i></a>
            
          </div>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src="/images/img_pf.png" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
