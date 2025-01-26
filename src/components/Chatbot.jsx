import React, { useState } from "react";


const Chatbot = () => {
  const [visible, setVisible] = useState(false);

  const toggleChatbot = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button className="chatbot-icon" onClick={toggleChatbot}>
        <img className="pic" src="/images/oipp.jpg" alt="Chatbot Icon" />
      </button>
      {visible && (
        <div className="chatbot">
          <header>
            <h2>CMC Bot</h2>
          </header>
          <ul className="conversation">
            <li className="chat bot">
              <img src="/images/oipp.jpg" alt="Bot" />
              <p>
                Bonjour ! <br />
                Je suis le bot de la CMC. <br />
                Comment puis-je vous aider ?
              </p>
            </li>
          </ul>
          <ul className="chat suggestion">
            <li>Qu'offre la CMC ?</li>
            <li>Comment s'inscrire ?</li>
            <li>Quelles sont les filières disponibles ?</li>
          </ul>
          <div className="chat-input">
            <textarea placeholder="Entrez un message..."></textarea>
            <span className="material-symbols-outlined">send</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
