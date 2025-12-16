import { createContext, useContext } from "react";
import { useParams } from "react-router-dom"; 
import { ContactListContext } from "./ContactListContext";

export const ContactDetailContext = createContext()


const ContactDetailContextProvider = ({ children }) => {
    
    const { contact_id } = useParams()
    const { contactState, loadingContactsState } = useContext(ContactListContext)
    
    const contactSelected = contactState.find(contact => Number(contact.contact_id) === Number(contact_id))

    const providerValues = {
        contactSelected,
        loadingContact: loadingContactsState,
    }

    return (
        <ContactDetailContext.Provider value={providerValues}>
            {children}
        </ContactDetailContext.Provider>
    )
}


export default ContactDetailContextProvider