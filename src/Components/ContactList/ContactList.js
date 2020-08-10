import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import SlideTransition from '../../transitionStyles/SlideContact.module.css';

const ContactList = ({ items, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.List}>
    {items.map(item => (
      <CSSTransition key={item.id} classNames={SlideTransition} timeout={250}>
        <Contact {...item} onDeleteContact={() => onDeleteContact(item.id)} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
