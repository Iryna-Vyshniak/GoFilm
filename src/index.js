import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'services/i18next';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';

import { Loader } from 'components/Loader/Loader';

import { App } from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <BrowserRouter basename="/GoFilm">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
