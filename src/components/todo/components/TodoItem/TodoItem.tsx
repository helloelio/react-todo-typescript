import React from 'react';

import { ITodo } from '../../../../config/interfaces';
import { Button } from '../../../../UIElements/Button';
import style from './styles.module.css';

interface Props {
  todo: ITodo;
  handleRemoveTodo: (id: number) => void;
}

export const TodoItem = ({ todo, handleRemoveTodo }: Props) => {
  return (
    <li className={style.todo}>
      <span>{todo.todoText}</span>
      <Button
        onClick={() => handleRemoveTodo(todo.id)}
        className={style.button}
      >
        x
      </Button>
    </li>
  );
};
