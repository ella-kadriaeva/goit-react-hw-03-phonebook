import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ value, onFilter }) {
  return (
    <>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
