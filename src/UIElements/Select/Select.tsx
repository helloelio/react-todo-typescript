import React from 'react';
import style from './styles.module.css';

// TODO: LEARN FOR GENERIC SELECT
type OptionValue = string | number;

type Option<T extends OptionValue> = {
  value: T;
  label: string;
};

type Props<T extends OptionValue> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

export const Select = <T extends OptionValue>({
  options,
  value,
  onChange,
}: Props<T>) => {
  function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = options[selectedIndex];
    onChange(selectedOption.value);
  }

  return (
    <select className={style.select} value={value} onChange={handleOnChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
