import './App.css'
import { useState } from 'react';
import ContactList from './Components/contactList.jsx';
import SelectedContact from "./Components/SelectedContact.jsx";

export default function App() {
   const [selectedContactId, setSelectedContactId] = useState(null)
   
  return (
    <>
     {selectedContactId ? (
      <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList 
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}


