import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactListContext } from "../../Context/ContactListContext";

function ContactSidebarHeader() {
const {searchString, setSearchString} = useContext(ContactListContext);
const navigate = useNavigate();

const handleNewChat = () => {
  navigate('/new-contact');
};



return (
    <div className="sidebar-header">
    <div className="sidebar-top">
        <span className="sidebar-title">WhatsApp</span>

        <div className="sidebar-actions">
        <button title="Nuevo chat" onClick={handleNewChat}>+</button>
        <button title="Opciones">⋮</button>
        </div>
    </div>

    <div className="sidebar-search">
        <input
        type="text"
        placeholder="Buscar un chat o iniciar uno nuevo"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        />
    </div>
    </div>
);
}

export default ContactSidebarHeader;