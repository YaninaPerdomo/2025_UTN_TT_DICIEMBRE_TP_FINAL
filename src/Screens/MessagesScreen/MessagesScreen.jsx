import React, { use } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar.jsx'
import { useParams } from 'react-router';

import { useState, useEffect } from 'react';
import { getContactById } from '../../services/contactService.js';




export default function MessagesScreen() {
    const parametros_url = useParams();
    const contact_id = parametros_url.contact_id;
    const [contactSelected, setContactSelected] = useState(null);
    const [loadingContact, setLoadingContact] = useState(true);
    let const_contact = null;


    function loadingContactById() {
      setLoadingContact(true);
      setTimeout(
        function() {
          const_contact = getContactById(contact_id);
          setContactSelected(const_contact);
          setLoadingContact(false);
        },
        2000
      )
    }

        
    
    useEffect(
      function() {
        loadingContactById();
      },
      [parametros_url, contact_id]
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
   return (
        <div>
            <h1>Pantalla de mensajes</h1>
            <ContactSidebar contact={contactSelected} />
            {
                loadingContact 
                ? <div>Cargando..</div>
                : <>
                    <h2>Contacto seleccionado: {contactSelected.contact_name}</h2>
                    <h3>Id: {contactSelected.contact_id}</h3>
                    <img src={contactSelected.contact_avatar} alt={`Avatar de ${contactSelected.contact_name}`} />
                    <p>Último mensaje: {contactSelected.last_message_content}</p>
                    
                  </>
            }
            
        </div>
    )
}


