import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'services/i18next';

import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme';

const loadingMarkup = (
  <div style={{ textAlign: 'center' }}>
    <h3>Loading...</h3>
  </div>
);

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'uk',
    name: 'Українська',
    country_code: 'ua',
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <ThemeProvider theme={theme}>
          <App languages={languages} />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
