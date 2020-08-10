import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import FilterValue from '../Filter/FilterValue';
import findContactsItem from '../Filter/findContactsItem';
import filterContacts from '../Filter/filterContacts';
import { save, get } from '../../utils/localStorageMethods';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Phonebook.module.css';
import { CSSTransition } from 'react-transition-group';
import logoTransition from '../../transitionStyles/Logo.module.css';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setShowLogo(true);
    const persistedContacts = get('contacts');
    if (persistedContacts) {
      setContacts(persistedContacts);
    }
  }, []);

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const isValidContact = ({ name, number }) => {
    console.log(typeof name);
    if (name.length <= 1 || name.trim() === 0 || Number(name)) {
      toast.error(`Your name is not valid! Please try again.`);
      return false;
    }
    if (isNaN(number)) {
      toast.error(`Your number is not valid! Please try again.`);
      return false;
    }
    return true;
  };

  const addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    if (isValidContact(contact)) {
      const stateContact = findContactsItem(contacts, contact);
      if (stateContact) {
        toast.error(`${contact.name} Contact is already exists!`);
        return;
      }

      setContacts([...contacts, contactToAdd]);
    }
  };

  const deleteContact = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={styles.PhonebookBlock}>
      <CSSTransition
        in={showLogo}
        classNames={logoTransition}
        timeout={500}
        mountOnEnter
      >
        <h1 className={styles.PhonebookMainTitle}>Phonebook</h1>
      </CSSTransition>
      <ContactForm onAddContact={addContact} />

      <FilterValue
        value={filter}
        onChangeFilter={changeFilter}
        isFiltered={contacts.length >= 2}
      />

      <ContactList items={filteredContacts} onDeleteContact={deleteContact} />
      <ToastContainer className={styles.ToastNote} />
    </div>
  );
};

export default Phonebook;
