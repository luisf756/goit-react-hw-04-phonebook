// import { nanoid } from 'nanoid';

import React, { useState, useEffect } from 'react';

import ContactList from './phone/ContactList'
import Filter from './phone/Filter';
import ContactForm from './phone/ContactForm'

const section = {
  width: '100vw',
  height: '40vh',
  margin: ' 0 auto',
  marginBottom: '100px',
  paddingRight: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const App = () => {// class App extends React.Component {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
   
  const renderContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const rellenar = (values) => {
    const contact = {
      id: values.id,
      name: values.name,
      number: values.number,
    };

    setContacts((prevContacts) => [...prevContacts, contact]);
  };
  const formSubmitHandler = (data) => {
    rellenar(data);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(updatedContacts);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  
  const filtered = renderContacts();
    
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'left',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <section style={section}>
        <h1>Phonebook</h1> 
        <ContactForm onSubmit={formSubmitHandler} />
        </section>
        
        <section style={section}>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} /> 
        <ContactList
          state={filtered}
          onDeleteContact={deleteContact}
        />
        </section>
      </div>
    );
  }

