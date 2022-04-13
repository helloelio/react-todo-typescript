import React from 'react';

import { ITodo } from '../../../../config/interfaces';
import { Button } from '../../../../UIElements/Button';
import style from './styles.module.css';
import { motion } from 'framer-motion';

interface Props {
  todo: ITodo;
  handleRemoveTodo: (id: number) => void;
}

export const TodoItem = ({ todo, handleRemoveTodo }: Props) => {
  const todoVariants = {
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.4,
      },
    }),
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.li
      className={style.todo}
      variants={todoVariants}
      initial='hidden'
      animate='visible'
      custom={todo.id}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <span>{todo.todoText}</span>
      <Button
        onClick={() => handleRemoveTodo(todo.id)}
        className={style.button}
        title='Delete to-do'
      >
        x
      </Button>
    </motion.li>
  );
};
