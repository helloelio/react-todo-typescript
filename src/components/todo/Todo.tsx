import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Container } from '../Container';
import { ErrorMessage } from './components/ErrorMessage';
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

  const [errorDisplay, setErrorDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (inputError) {
        setErrorDisplay(true);
      } else {
        setErrorDisplay(false);
      }
    }, 400);
  }, [inputError]);

  return (
    <>
      <Container>
        {errorDisplay ? (
          <ErrorMessage
            errorText='You cannot add an empty to-do!'
            error={inputError}
          />
        ) : null}
        <TodoForm
          handleAddTodo={handleAddTodo}
          handleChangeInput={handleChangeInput}
          inputError={errorDisplay}
          todoText={todoText}
          processing={processing}
        />
        {list.length > 0 ? (
          <TodoList list={list} handleRemoveTodo={handleRemoveTodo} />
        ) : (
          <motion.h1
            className={style.empty}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            No to-do to complete!
          </motion.h1>
        )}
      </Container>
      <TodoFooter />
    </>
  );
};
