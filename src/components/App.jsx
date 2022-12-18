import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = (name, number) => {
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => [
          ...prevState,
          { id: nanoid(), name, number },
        ]);
  };

  const onChange = filter => {
    setFilter(filter);
  };

  const deleteContact = contId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contId)
    );
  };
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onChange={onChange} filter={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={deleteContact}
      />
    </div>
  );
}
