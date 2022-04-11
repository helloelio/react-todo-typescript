import React from 'react';

import s from './styles.module.css';

export const Container = ({ children }: any) => {
  return <div className={s.container}>{children}</div>;
};
