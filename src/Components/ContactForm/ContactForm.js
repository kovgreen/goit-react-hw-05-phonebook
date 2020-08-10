import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    resetForm();
  };

  return (
    <form className={styles.FormBlock} onSubmit={handleSubmit}>
      <label className={styles.Label}>
        Name
        <input
          className={styles.Input}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off"
        />
      </label>
      <label className={styles.Label}>
        Number
        <input
          className={styles.Input}
          type="text"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          autoComplete="off"
        />
      </label>
      <button className={styles.Button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
