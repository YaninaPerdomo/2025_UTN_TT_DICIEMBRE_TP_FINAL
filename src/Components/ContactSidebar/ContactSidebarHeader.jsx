

function ContactSidebarHeader() {
const handleNewChat = () => {alert("Nuevo chat")};

return (
    <div className="sidebar-header">
    <div className="sidebar-top">
        <span className="sidebar-title">WhatsApp</span>

        <div className="sidebar-actions">
        <button title="Nuevo chat" onClick={handleNewChat}>＋</button>
        <button title="Opciones">⋮</button>
        </div>
    </div>

    <div className="sidebar-search">
        <input
        type="text"
        placeholder="Buscar un chat o iniciar uno nuevo"
        />
    </div>
    </div>
);
}

export default ContactSidebarHeader;