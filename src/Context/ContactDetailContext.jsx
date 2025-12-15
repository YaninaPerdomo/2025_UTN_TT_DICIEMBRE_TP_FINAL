import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { getContactById } from "../services/contactService";

export const ContactDetailContext = createContext()


const ContactDetailContextProvider = ({ children }) => {
    
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    
    const [contactSelected, setContactSelected] = useState(null)
    const [loadingContact, setLoadingContact] = useState(true)
    
    function loadContactById (){
        setLoadingContact(true)
        setTimeout(
            function () {
                const contact = getContactById(contact_id) 
                setContactSelected(contact)
                setLoadingContact(false)
            },
            2000
        )
    }

    useEffect(() => {
        loadContactById()
    }, [contact_id])

    return (
        <ContactDetailContext.Provider value={{ contactSelected, loadingContact }}>
            {children}
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider