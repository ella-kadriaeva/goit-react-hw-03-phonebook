import React from 'react';
import css from './Container.module.css';

const Container = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
