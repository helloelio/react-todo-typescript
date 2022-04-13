import React, { ChangeEventHandler, useEffect, useState } from 'react';

import { ITodo } from '../../../config/interfaces';

export const useTodo = () => {
  const listFromStorage: any = localStorage.getItem('list');

  const [id, setId] = useState<number>(1);
  const [todoText, setTodoText] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const [list, setList] = useState<ITodo[]>(JSON.parse(listFromStorage) || []);
  const [delayForFooter, setDelayForFooter] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    setDelayForFooter(list.length > 0 ? list.length : 1);
  }, [list]);

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
        setId(list.length + 2);
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
    delayForFooter,
    handleRemoveTodo,
    handleChangeInput,
    handleAddTodo,
  };
};
