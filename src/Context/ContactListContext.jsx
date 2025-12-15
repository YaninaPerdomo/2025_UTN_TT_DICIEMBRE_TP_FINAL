import { createContext, useEffect, useState } from "react";
import { getContactList } from "../services/contactService";

export const ContactListContext = createContext();


const ContactListContextProvider = ({ children }) =>{ 
const [contactState, setContactState] = useState([]);
const [loadingContactsState, setLoadingContactsState] = useState(true);

function loadContactList() {
    setLoadingContactsState(true);
    setTimeout(() => {
    const contact_list = getContactList();
    setContactState(contact_list);
    setLoadingContactsState(false);
    }, 2000); }

useEffect(loadContactList, []);

const providerValues = {
    contactState,
    loadingContactsState,
    loadContactList,
};

return (
    <ContactListContext.Provider value={providerValues}>
        {children} 
    </ContactListContext.Provider>
);
};

export default ContactListContextProvider;
