import PropTypes from 'prop-types';

const filterContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

filterContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  fiter: PropTypes.string.isRequired,
};

export default filterContacts;
