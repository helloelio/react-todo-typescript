import './App.css';

import React from 'react';

import { Header } from './components/Header';
import { Todo } from './components/todo';

function App() {
  return (
    <div className='App'>
      <div className='todo-app'>
        <Header />
        <Todo />
      </div>
    </div>
  );
}

export default App;

// TODO: feature - make animation for create,delete,render(use ui library);
// TODO: feature - add footer for todo(search, filter, category);
// TODO: feature - maybe add css variables;
// TODO: chore - refactor(make code readable);
// TODO: feature - maybe add redux in project;
