import React, { InputHTMLAttributes } from 'react';

import { InputText } from './components/InputText';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ type, ...rest }) => {
  switch (type) {
    case 'text':
      return <InputText {...rest} />;
    default:
      return null;
  }
};
