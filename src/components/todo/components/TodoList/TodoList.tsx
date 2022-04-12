import React from 'react';
import { ITodo } from '../../../../config/interfaces';
import { TodoItem } from '../TodoItem';
import style from './styles.module.css';

interface Props {
  list: ITodo[];
  handleRemoveTodo: (id: number) => void;
}

export const TodoList = ({ list, handleRemoveTodo }: Props) => {
  return (
    <ul className={style.list}>
      {list.map((todo: ITodo) => {
        return (
          <TodoItem
            handleRemoveTodo={handleRemoveTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
};
