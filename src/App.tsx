import './App.css';

import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

import { Header } from './components/Header';
import { Todo } from './components/todo';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <Flex
        justify='center'
        align='center'
        bg='#1A203A'
        transition='all .5s ease'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='todo-app'
        >
          <Header />
          <Todo />
        </motion.div>
      </Flex>
    </div>
  );
};

export default App;

// TODO: feature - make animation for create,delete,render(use ui library);
// TODO: feature - add footer for todo(search, filter, category);
// TODO: feature - maybe add css variables;
// TODO: chore - refactor(make code readable);
// TODO: feature - maybe add redux in project;
