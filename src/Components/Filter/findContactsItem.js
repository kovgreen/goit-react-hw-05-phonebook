import PropTypes from 'prop-types';

const findContactsItem = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);

findContactsItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  contact: PropTypes.array.isRequired,
};

export default findContactsItem;
