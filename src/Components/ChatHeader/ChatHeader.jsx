import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatHeader.css';

export default function ChatHeader({ contact }) {
  const navigate = useNavigate();

  if (!contact) return null;

  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
        >
          ←
        </button>
        <img
          src={contact.contact_avatar}
          alt={contact.contact_name}
        />

        <div className="chat-header-info">
          <div className="chat-name">
            {contact.contact_name}
          </div>
          <div className="chat-status">
            en línea
          </div>
        </div>
      </div>

      <div className="chat-header-right">
        <span>🔍</span>
        <span>📎</span>
        <span>⋮</span>
      </div>
    </div>
  );
}