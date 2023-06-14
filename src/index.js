import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from "@chakra-ui/react";
import App from './App';
import theme from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
      <App/>
      </Router>
    </React.StrictMode>
  </ChakraProvider>
);