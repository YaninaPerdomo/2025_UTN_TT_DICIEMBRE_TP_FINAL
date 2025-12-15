import React, { use } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar.jsx'
import { useParams } from 'react-router-dom';
import './MessagesScreen.css';
import { useState, useEffect } from 'react';
import { getContactById } from '../../services/contactService.js';
import ChatHeader from '../../Components/ChatHeader/ChatHeader.jsx';

export default function MessagesScreen() {
    const parametros_url = useParams();
    const contact_id = parametros_url.contact_id;
    const [contactSelected, setContactSelected] = useState(null);
    const [loadingContact, setLoadingContact] = useState(true);
    const [messages, setMessages] = useState([]); 

    const [newMessage, setNewMessage] = useState("");
    
    function loadingContactById() {
      setLoadingContact(true);
      setTimeout(
        function() {
          const fetched_contact = getContactById(contact_id); 
          setContactSelected(fetched_contact);
          
          
          if (fetched_contact && fetched_contact.messages) {
            setMessages(fetched_contact.messages);
          } else {
            setMessages([]);
          }

          setLoadingContact(false);
        },
        2000
      )
    }

    useEffect(
      function() {
        loadingContactById();
      },
      [contact_id] 
    );
    
    if (loadingContact) {
      return (
        <div>Cargando contacto...</div>
      )
    }
    if (contactSelected === null) {
      return (
        <div>Contacto no encontrado</div>
      )
    }
    
    function sendMessage() {
      if (newMessage.trim() === "") return; // Previene enviar mensajes vacíos

      const newMsg = {
        id: Date.now(), 
        text: newMessage,
        from: "me"
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }

  return (
    <>
      <ChatHeader contact={contactSelected} />
      <div className="messages-area">
        {
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.from === "me" ? "sent" : "received"}`}
            >
              {msg.text}
            </div>
          ))}
      </div>

     <div className="input-area">
        <input
            placeholder="Escribe un mensaje"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === "Enter" && newMessage.trim() !== "") {
                sendMessage();
            }
        }}
        />
    </div>
    </>
  )
}
