import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Fade,
} from '@chakra-ui/react';
import React from 'react';

import { Container } from '../Container';
import { TodoFooter } from './components/TodoFooter';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

export const Todo: React.FC = () => {
  const {
    handleAddTodo,
    handleRemoveTodo,
    handleChangeInput,
    handleCloseAlert,
    delayForFooter,
    inputError,
    todoText,
    processing,
    list,
  } = useTodo();

  return (
    <Box>
      <Container>
        {inputError && (
          <Fade in={inputError} unmountOnExit={inputError}>
            <Alert
              status='error'
              bg='red.500'
              color='#ffffff'
              position='fixed'
              top='5'
              right='5'
              width='50'
            >
              <AlertIcon color='#ffffff' />
              <AlertTitle mr={2}>You can't add empty to-do!</AlertTitle>
              <CloseButton onClick={handleCloseAlert} />
            </Alert>
          </Fade>
        )}
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
          <Alert
            status='info'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='150px'
            mb='10'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              No to-do to complete!
            </AlertTitle>
            <AlertDescription maxWidth='sm' fontSize='large'>
              You can add to-do for your list
            </AlertDescription>
          </Alert>
        )}
      </Container>
      <TodoFooter numberOfItems={list.length} delayForFooter={delayForFooter} />
    </Box>
  );
};
