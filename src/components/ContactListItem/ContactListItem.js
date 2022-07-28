import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export default function ContactListItem({ name, number, deleteContacts }) {
  return (
    <li className={css.item}>
      <p>{name}:</p>
      <p>{number}</p>
      {
        <button type="button" onClick={deleteContacts}>
          Delete
        </button>
      }
    </li>
  );
}

ContactListItem.propTypes = {
  deleteContacts: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
