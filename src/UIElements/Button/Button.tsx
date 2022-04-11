import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  someProp?: any;
};

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
