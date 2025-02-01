import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [visible, setVisible] = useState(false);
  const chatbotRef = useRef(null); // Reference to the chatbot DOM element

  const toggleChatbot = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  // Function to check if the chatbot is visible in the viewport
  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (chatbotRef.current && isElementInViewport(chatbotRef.current)) {
        console.log("Chatbot is in the viewport!");
      }
    };

    // Listen to the scroll event to check if the chatbot is in the viewport
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <button className="chatbot-icon" onClick={toggleChatbot}>
        <img className="pic" src="/images/oipp.jpg" alt="Chatbot Icon" />
      </button>

      {visible && (
        <div className="chatbot" ref={chatbotRef}>
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
