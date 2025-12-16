import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './MessagesScreen.css';
import ChatHeader from '../../Components/ChatHeader/ChatHeader.jsx';
import { ContactDetailContext } from '../../Context/ContactDetailContext.jsx';
import { ContactListContext } from '../../Context/ContactListContext.jsx';


export default function MessagesScreen() {
    const { contact_id } = useParams();
    const { contactSelected, loadingContact } = useContext(ContactDetailContext);

    const [newMessage, setNewMessage] = useState("");
    

    
    const { sendMessage, markAsRead } = useContext(ContactListContext);
    
    useEffect(() => {
        if(contact_id){
            markAsRead(contact_id)
        }
    }, [contact_id])

    if (loadingContact) {
      return (
        <div>Cargando contacto...</div>
      )
    }
    if (contactSelected === undefined) {
      return (
        <div>Contacto no encontrado</div>
      )
    }
    
    function handleSendMessage() {
      if (newMessage.trim() === "") return; 
      sendMessage(contact_id, newMessage, 'me');
      setNewMessage("");
    }

  return (
    <>
      <ChatHeader contact={contactSelected} />
      <div className="messages-area">
        {
          contactSelected.messages.map((msg) => (
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
                handleSendMessage();
            }
        }}
        />
    </div>
    </>
  )
}
