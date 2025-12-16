import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ContactListContext } from '../../Context/ContactListContext.jsx' 
import './ContactList.css'

export default function ContactList() {
    
    const { contactState, loadingContactsState, filteredContacts } = useContext(ContactListContext)
    console.log('CONTACTOS DESDE LIST', contactState)

    
    if(loadingContactsState){
        return (
            <div>Cargando contactos...</div>
        )
    }
    
    if(filteredContacts.length === 0){
        return (
            <div>No hay contactos</div>
        )
    }
    
    return (
        <div>
            {
                filteredContacts.map(function (contact) {
            return (
            <NavLink
            key={contact.contact_id}
            to={`/chat/${contact.contact_id}/messages`}
            className={({ isActive }) =>
            `contact-item ${isActive ? "active" : ""}`
            }
>
            <div>
                <img
                className="contact-avatar"
                src={contact.contact_avatar}
                alt={contact.contact_name}
                />
                <h2>{contact.contact_name}</h2>
            </div>

            <div>
                <p>{
                    contact.messages && contact.messages.length > 0 
                    ? contact.messages[contact.messages.length - 1].text 
                    : "No hay mensajes"
                }</p>

                {contact.contact_unseen_messages > 0 && (
                <span>{contact.contact_unseen_messages}</span>
                )}
            </div>
            </NavLink>
        );
        })
            }
        </div>
    )
}
