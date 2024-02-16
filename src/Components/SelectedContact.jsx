import Reach from 'react';

const SelectedContact = (props) => {
    return (
        <div>
            <h2>Name: {props.contact.name}</h2>
            <p>Email: {props.contact.email}</p>
            <p>Phone: {props.contact.phone}</p>
            <h2>Address</h2>
            <p>Street: {props.contact.address.street}</p>
            <p>Company: {props.contact.company.name}</p>
            <button onClick={() => contact.setSelectedContactId(null)}>Back</button>
        </div>
    );
};

export default SelectedContact;