import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Box>
      <Heading
        as='h1'
        fontSize='4rem'
        padding='5'
        textAlign='center'
        color='purple.50'
      >
        To-do
      </Heading>
    </Box>
  );
};
