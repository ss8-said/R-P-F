import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css"; // Import the CSS file

const Chatbot = () => {
  const [visible, setVisible] = useState(false);
  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setVisible((prevVisible) => !prevVisible);
    console.log("Chatbot toggled. Visible:", !visible); // Debugging
  };

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button className="chatbot-icon" onClick={toggleChatbot}>
        <img className="pic" src="/images/oipp.jpg" alt="Chatbot Icon" />
      </button>

      {/* Chatbot Window */}
      <div className={`chatbot ${visible ? "show" : "hide"}`} ref={chatbotRef}>
        <header>
          <h2> CMC Bot</h2>
        </header>
        <ul className="conversation">
          <li className="chat bot">
            <p>
              Bonjour ! <br />
              Comment puis-je vous aider ?
            </p>
          </li>
        </ul>
        <ul className="chat suggestion">
          <li>Qu'offre la CMC ?</li> <br />
          <li>Comment s'inscrire ?</li> <br />
          <li>Quelles sont les filières disponibles ?</li>
        </ul>
        <div className="chat-input">
          <textarea placeholder="Entrez un message..."></textarea>
          <span className="material-symbols-outlined">send</span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
