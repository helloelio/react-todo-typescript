import React, { ChangeEventHandler, useState } from 'react';

import { ITodo } from '../../../config/interfaces';

export const useTodo = () => {
  const [id, setId] = useState<number>(1);
  const [todoText, setTodoText] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const [list, setList] = useState<ITodo[]>([]);

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setTodoText(value);
    setInputError(false);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      if (todoText.trim().length === 0) {
        console.log('error -> is empty');
        setInputError(true);
      } else {
        setList((prevState): any => [...prevState, { todoText, id }]);
        setTodoText('');
        setId((prevState) => prevState + 1);
      }
      setProcessing(false);
    }, 500);
  };

  const handleRemoveTodo = (id: any) => {
    setTimeout(() => {
      setList((prevState) => prevState.filter((todo: ITodo) => todo.id !== id));
    }, 1000);
  };

  return {
    list,
    todoText,
    inputError,
    processing,
    handleRemoveTodo,
    handleChangeInput,
    handleAddTodo,
  };
};
