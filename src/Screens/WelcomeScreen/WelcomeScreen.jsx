import React from 'react';
import './WelcomeScreen.css';

export default function WelcomeScreen() {
  return (
    <div className="container-bienvenida">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" 
            alt="WhatsApp Logo" 
            className="logo-bienvenida"
        />
        <h1>WhatsApp Web</h1>
        <p>Enviar y recibir mensajes sin necesidad de tener el teléfono conectado a internet</p>
        <p>Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono</p>
    </div>
  )
}
