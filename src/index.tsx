import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';

import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <ChakraProvider resetCSS>
//     <App />
//   </ChakraProvider>
// );

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
