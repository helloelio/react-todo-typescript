import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Tag,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';

import { ITodo } from '../../../../config/interfaces';
import style from './styles.module.css';

interface Props {
  todo: ITodo;
  handleRemoveTodo: (id: number) => void;
}

export const TodoItem = ({ todo, handleRemoveTodo }: Props) => {
  return (
    <li className={style.todo}>
      <Tag colorScheme='messenger' position='absolute' top='-2' left='-2'>
        {todo.date}
      </Tag>
      <Tooltip label='You can edit your task!' placement='top'>
        <Editable defaultValue={todo.todoText}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Tooltip>
      <Box
        transition='all .3s ease'
        display='flex'
        justifyContent='center'
        alignItems='center'
        w={10}
        h={10}
        borderRadius='50%'
        bg='blackAlpha.100'
        onClick={() => handleRemoveTodo(todo.id)}
        cursor='pointer'
        _hover={{ bg: '#e53e3e' }}
        _active={{ scale: '0.95' }}
      >
        <DeleteIcon w={5} h={5} />
      </Box>
    </li>
  );
};
