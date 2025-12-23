import { useContext } from "react";
import { Route, Routes, Outlet } from "react-router";
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen";
import ContactListContextProvider from "./Context/ContactListContext";
import ContactDetailContextProvider from "./Context/ContactDetailContext";
import { ThemeContext } from "./Context/ThemeContext";
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import "../App.css";
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar";
import NewContact from "./Screens/NewContact/NewContact";

import { useLocation } from "react-router";

function WhatsappLayout() {
  const location = useLocation();
  const isMobileChatView = location.pathname !== "/" && !location.pathname.endsWith("whatsapp-web-clone/"); 
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`whatsapp-container ${isMobileChatView ? 'mobile-chat-active' : ''} ${isDark ? 'dark-mode' : ''}`}>
      <div className="sidebar">
        <ContactSidebar />
      </div>

      <div className="chat-area">
        <Outlet />
      </div>
    </div>
  );
}
function App() {
  return (
    <ContactListContextProvider>
      <Routes>
        <Route path="/" element={<WhatsappLayout />}>
          
          <Route index element={<WelcomeScreen />} />
          
          <Route path="new-contact" element={<NewContact />} />

          <Route
            path="chat/:contact_id/messages"
            element={
              <ContactDetailContextProvider>
                <MessagesScreen />
              </ContactDetailContextProvider>
            }
          />
        </Route>
      </Routes>
    </ContactListContextProvider>
  );
}
export default App;

