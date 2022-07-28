import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

export default function ContactList({ contacts, deleteContacts }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContacts={() => deleteContacts(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  deleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
