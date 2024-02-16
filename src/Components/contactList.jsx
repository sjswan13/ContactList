import { React } from 'react';

function ContactList({contacts}) { 

  return ( 
    <div>
      <h2>Contact List</h2>
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
              // Map 
            }
          </tbody>
        </table>
    </div>
    ); 
}
export default ContactList