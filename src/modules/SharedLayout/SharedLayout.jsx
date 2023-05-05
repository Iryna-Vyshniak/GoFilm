import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './SharedLayout.styled';
import {
  lightTheme,
  darkTheme,
} from 'components/ToggleDarkLightMode/ToggleDarkLightMode';
import { useDarkMode } from 'components/useDarkMode/useDarkMode';
import Footer from './Footer/Footer';
import { Header } from './Header/Header';

export const SharedLayout = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    document.title = t('title');
  }, [lng, t]);

  /* перевіряємо, чи змонтувався компонент
Якщо цього ще не сталося -відобразимо порожній div: */
  if (!componentMounted) {
    return <div />;
  }
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Container>
          <Header toggleTheme={toggleTheme} theme={theme} />
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
