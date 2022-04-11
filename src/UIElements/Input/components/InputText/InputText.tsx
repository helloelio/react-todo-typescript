import React, { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const InputText: React.FC<Props> = ({ value, ...rest }) => {
  return <input type='text' value={value} {...rest} />;
};
