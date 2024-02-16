import "./App.css";
import { useState } from "react";
import ContactList from "./Components/contactList";
import SelectedContact from "./Components/SelectedContact";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {selectedContact ? (
        <SelectedContact
        contact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
    ) : (
        <ContactList setSelectedContact={setSelectedContact} />
      )}
    </>
  );
}

export default App;