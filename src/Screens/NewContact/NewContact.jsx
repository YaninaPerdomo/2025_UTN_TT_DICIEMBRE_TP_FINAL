import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactListContext } from '../../Context/ContactListContext';
import './NewContact.css';

export default function NewContact() {
    const { addContact } = useContext(ContactListContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/512/1053/1053244.png');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim()) return;

        const newContact = {
            contact_id: Date.now(),
            contact_name: name,
            contact_avatar: avatar,
            contact_unseen_messages: 0,
            messages: []
        };

        addContact(newContact);
        navigate('/');
    };

    return (
        <div className="new-contact-container">
            <div className="header-row">
                <h2>Nuevo Contacto</h2>
                <button onClick={() => navigate('/')} className="close-btn">X</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>URL de Avatar (opcional):</label>
                    <input 
                        type="text" 
                        value={avatar} 
                        onChange={(e) => setAvatar(e.target.value)} 
                    />
                </div>
                <button type="submit">Guardar Contacto</button>
            </form>
        </div>
    );
}
