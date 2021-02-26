import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import ThemeContextProvider from './contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);