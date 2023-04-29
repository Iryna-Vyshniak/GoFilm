import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import { I18nextProvider } from 'react-i18next';
import 'services/i18next';

import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme';

const loadingMarkup = (
  <div style={{ textAlign: 'center' }}>
    <h3>Loading...</h3>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      {/*  <I18nextProvider> */}
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
      {/* </I18nextProvider> */}
    </React.StrictMode>
  </Suspense>
);
