import React from 'react';
import './WelcomeScreen.css';

export default function WelcomeScreen() {
  return (
    <div className="welcome-container">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" 
            alt="WhatsApp Logo" 
            className="welcome-logo"
        />
        <h1>WhatsApp Web</h1>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use WhatsApp on up to 4 linked devices and 1 phone.</p>
    </div>
  )
}
