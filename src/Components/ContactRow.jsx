import Reach from 'react';

export default function ContactRow(props) {
    return (
      <tr onClick={() => props.setSelectedContact(props.contact)}>
        <td>{props.contact.name}</td>
        <td>{props.contact.email}</td>
        <td>{props.contact.phone}</td>
      </tr>
    );
  }