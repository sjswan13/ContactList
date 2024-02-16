import React, { useState } from 'react';
import ContactList from './Components/contactList.jsx';
import './App.css'


const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

 function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("contacts :", contacts)

  return (
    <div>
      <ContactList />
    </div>
  );
}

export default App;
