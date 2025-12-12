import { useContext, useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import ContactSearchForm from "../ContactSearchForm/ContactSearchForm";
import { ThemeContext } from "../../Context/ThemeContext.jsx";
import { getContactList } from "../../services/contactService.js";

//Snippet para crear un componente de React
//RFC = React Functional Component
//Si el componente no tiene logica interna (Estados, funciones, etc) se puede crear como una funcion flecha
//Si el componente tiene logica interna (Estados, funciones, etc) se debe crear como una funcion normal

export default function ContactSidebar() {
    const [contactState, setContactState] = useState([]);
    const [loadingContactState, setLoadingContactState] = useState(true);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

function loadContactList() {
    setLoadingContactState(true);
    //Esta funcion nos permite atrasar la ejecucion de otra funcion. recibe dos paramentros: la funcion a ejecutar y el tiempo en milisegundos a esperar antes de ejecutarla
    //Cargo la lista de contactos simulando una llamada a un servidor con un retardo de 2 segundos
    setTimeout(function () {
    console.log("Cargando la lista de contactos...");
      /*Cargo la respuesta del servidor en el estado del componente */
    const contact_list = getContactList();
      /*Guardo la respuesta en mi estado */
      setContactState(contact_list);
      setLoadingContactState(false);
    }, 2000);
  }

  /*la funcion useEffect nos permite controlar cuantas veces una funcion se ejecuta
Si le pasamos un array vacio como segundo parametro, la funcion se ejecuta solo una vez, cuando el componente se monta
Si le pasamos un array con variables, la funcion se ejecuta cada vez que alguna de las variables cambie
Si no le pasamos un segundo parametro, la funcion se ejecuta cada vez que el componente se renderiza
*/
  useEffect(loadContactList, []);

console.log(loadingContactState, contactState); 
return (
    <aside className={"aside" + (isDarkMode ? " aside-dark" : "")}>
    <button onClick={toggleTheme}>Cambiar tema</button>
    <div>
        <ContactSearchForm />
        <a>Crear Contacto</a>
      </div>
      <ContactList
        contactList={contactState}
        loadingContactState={loadingContactState}
      />
    </aside>
  );
}
