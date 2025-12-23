import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactListContext } from "../../Context/ContactListContext";
import { ThemeContext } from "../../Context/ThemeContext";

function ContactSidebarHeader() {
const {searchString, setSearchString} = useContext(ContactListContext);
const { toggleTheme, isDark } = useContext(ThemeContext);
const navigate = useNavigate();

const handleNewChat = () => {
  navigate('/new-contact');
};



return (
    <div className="sidebar-header">
    <div className="sidebar-top">
        <span className="sidebar-title">WhatsApp</span>

        <div className="sidebar-actions">
        <button title="Cambiar tema" onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {isDark ? (
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
        </button>
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