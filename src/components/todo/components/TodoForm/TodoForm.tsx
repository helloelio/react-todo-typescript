import { Button, Input } from '@chakra-ui/react';
import React from 'react';

import { useTodo } from '../../hooks/useTodo';
import style from './styles.module.css';
import { AddIcon } from '@chakra-ui/icons';

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
        isInvalid={inputError}
        placeholder='Enter your new task'
        color='purple.50'
        _placeholder={{ color: 'inherit' }}
        variant='flushed'
        size='md'
        focusBorderColor='purple.500'
        errorBorderColor='red.500'
        width='70%'
        type='text'
        value={todoText}
        onChange={handleChangeInput}
      />
      <Button
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        size='md'
        colorScheme='purple'
        color='purple.50'
        variant='solid'
        type='submit'
        _active={{ transform: 'scale(0.95)' }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        isLoading={processing}
      >
        <AddIcon />
      </Button>
    </form>
  );
};
