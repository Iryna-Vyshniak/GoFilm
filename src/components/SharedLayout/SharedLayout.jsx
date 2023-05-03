import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from './SharedLayout.styled';
import {
  lightTheme,
  darkTheme,
} from 'components/ToggleDarkLightMode/ToggleDarkLightMode';
import { useDarkMode } from 'components/useDarkMode/useDarkMode';
import Footer from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';

export const SharedLayout = ({ currentLanguage, languages }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('title');
  }, [currentLanguage, t]);

  /* перевіряємо, чи змонтувався компонент
Якщо цього ще не сталося -відобразимо порожній div: */
  if (!componentMounted) {
    return <div />;
  }
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Container>
          <Header
            languages={languages}
            toggleTheme={toggleTheme}
            theme={theme}
          />
          <main>
            <Suspense fallback={<div>{t('loading')}</div>}>
              <Outlet />
            </Suspense>
          </main>
          <Footer t={t} />
        </Container>
      </ThemeProvider>
    </>
  );
};

SharedLayout.propTypes = {
  currentLanguage: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country_code: PropTypes.string.isRequired,
  }).isRequired,

  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country_code: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
