import ContactSidebarHeader from "./ContactSidebarHeader";
import ContactList from "../ContactList/ContactList";

export default function ContactSidebar() {
  return (
    <aside className="contact-sidebar">
      <ContactSidebarHeader />
      
      <ContactList />
    </aside>
  );
}
