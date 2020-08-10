import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <li className={styles.ContactBlock}>
      <span className={styles.ContactName}>{name}</span>
      <span className={styles.ContactNumber}>{number}</span>
      <button
        className={styles.ContactButtonDelete}
        type="button"
        onClick={onDeleteContact}
      >
        &#10006;
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
