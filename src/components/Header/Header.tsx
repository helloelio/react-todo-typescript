import React from 'react';

import style from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Things to do </h1>
    </header>
  );
};
