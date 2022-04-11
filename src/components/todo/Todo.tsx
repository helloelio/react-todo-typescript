import React from 'react';

import { Container } from '../Container';
import { TodoFooter } from './components/TodoFooter';
import { TodoForm } from './components/TodoForm/TodoFrom';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';
import style from './styles.module.css';

export const Todo: React.FC = () => {
  const {
    handleAddTodo,
    handleRemoveTodo,
    handleChangeInput,
    inputError,
    todoText,
    processing,
    list,
  } = useTodo();

  return (
    <>
      <Container>
        {inputError ? (
          <p className={style.empty}> You cannot add an empty to-do. </p>
        ) : null}
        <TodoForm
          handleAddTodo={handleAddTodo}
          handleChangeInput={handleChangeInput}
          inputError={inputError}
          todoText={todoText}
          processing={processing}
        />
        {list.length > 0 ? (
          <TodoList list={list} handleRemoveTodo={handleRemoveTodo} />
        ) : (
          <h1 className={style.empty}>List is empty.</h1>
        )}
      </Container>
      <TodoFooter />
    </>
  );
};
