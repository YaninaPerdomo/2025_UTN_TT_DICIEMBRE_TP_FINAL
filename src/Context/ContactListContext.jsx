import { createContext, useEffect, useState } from "react";
import { getContactList } from "../services/contactService";



export const ContactListContext = createContext();

const ContactListContextProvider = ({ children }) => {
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)


    function loadContactList (){
        setLoadingContactState(true)
        setTimeout(
            function () {
                console.log('Cargando la lista de contactos')
                const contact_list = getContactList()
                setContactState(contact_list)
                setLoadingContactState(false)
            },
            2000
        )
        
    }

    const addContact = (newContact) => {
        setContactState([...contactState, newContact])
    }

    const sendMessage = (contactId, messageText, sender) => {
        const newMessage = {
            id: Date.now(),
            text: messageText,
            from: sender,
            created_at: new Date()
        }
        
        const updatedContacts = contactState.map(contact => {
            if (Number(contact.contact_id) === Number(contactId)) {
                return {
                    ...contact,
                    messages: [...contact.messages, newMessage]
                }
            }
            return contact
        })

        setContactState(updatedContacts)
    }


    const markAsRead = (contactId) => {
        const updatedContacts = contactState.map(contact => {
            if (Number(contact.contact_id) === Number(contactId)) {
                return {
                    ...contact,
                    contact_unseen_messages: 0
                }
            }
            return contact
        })
        setContactState(updatedContacts)
    }

    const [searchString, setSearchString] = useState("")

    const filteredContacts = searchString.length >= 3
        ? contactState.filter(contact => contact.contact_name.toLowerCase().includes(searchString.toLowerCase()))
        : contactState

    useEffect (
        () => {
            const storedContacts = localStorage.getItem('contacts')
            if(storedContacts){
                setContactState(JSON.parse(storedContacts))
                setLoadingContactState(false)
            } else {
                loadContactList()
            }
        },
        []
    )

    useEffect(() => {
        if(contactState.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(contactState))
        }
    }, [contactState])

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
        addContact,
        sendMessage,
        markAsRead,
        searchString,
        setSearchString,
        filteredContacts
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            {children}
        </ContactListContext.Provider>
    )
}


export default ContactListContextProvider