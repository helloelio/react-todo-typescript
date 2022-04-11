import React from 'react';

import { Button } from '../../../../UIElements/Button';
import { Input } from '../../../../UIElements/Input';
import { useTodo } from '../../hooks/useTodo';
import style from './styles.module.css';

type Props = Pick<
  ReturnType<typeof useTodo>,
  | 'handleAddTodo'
  | 'handleChangeInput'
  | 'inputError'
  | 'todoText'
  | 'processing'
>;

export const TodoForm: React.FC<Props> = ({
  handleAddTodo,
  handleChangeInput,
  todoText,
  inputError,
  processing,
}) => {
  return (
    <form className={style.form} onSubmit={(e) => handleAddTodo(e)}>
      <Input
        className={
          inputError ? `${style.inputError} ${style.input}` : style.input
        }
        type='text'
        placeholder='Enter your new task'
        value={todoText}
        onChange={handleChangeInput}
      />
      <Button className={style.button} type='submit' disabled={processing}>
        {processing ? 'Loading' : 'Create'}
      </Button>
    </form>
  );
};
