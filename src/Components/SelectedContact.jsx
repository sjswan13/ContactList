import React from 'react';
import { useState, useEffect } from 'react'

export default function SelectedContact ({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  console.log(selectedContactId, "dogg")
  

  useEffect(() => {
    async function fetchSingleContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        
          const result = await response.json();
          console.log(result, "result")
        setContact(result);
  

      } catch(error) {
        console.error(error, "trouble fetching single contact")
      }
    }
    fetchSingleContact()
  }, []);

    return (
      <div>
        {contact && (
          <div>
            <p>
              <b>Name:</b>{contact.name}
            </p>
            <p>
              <b>Email:</b>{contact.email}
            </p>
            <p>
              <b>Phone:</b>{contact.phone}
            </p>
          </div>
        )}
      </div>
    )
}