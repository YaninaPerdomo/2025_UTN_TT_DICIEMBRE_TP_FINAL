import { useContext } from "react";
import ContactList from "../ContactList/ContactList";
import { ThemeContext } from "../../Context/ThemeContext";
import ContactSearchForm from "../ContactSearchForm/ContactSearchForm";
import ContactSidebarHeader from "./ContactSidebarHeader";
import "../ContactSidebar/ContactSidebarHeader"


export default function ContactSidebar() {
   return (
    <>
    <ContactSidebarHeader />
    <div className="chat-list">
        <ContactSearchForm />
        
      </div>

      <ContactList />
  </>
 );
}

