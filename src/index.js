import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'services/i18next';

import { ThemeProvider } from 'styled-components';
import { App } from './components/App';
import { theme } from 'styles/theme';

import { Loader } from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
