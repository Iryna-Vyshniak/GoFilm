import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { BsFilm } from 'react-icons/bs';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import {
  lightTheme,
  darkTheme,
  ToggleDarkLightMode,
} from 'components/ToggleDarkLightMode/ToggleDarkLightMode';
import { useDarkMode } from 'components/useDarkMode/useDarkMode';

import Footer from 'components/Footer/Footer';

export const SharedLayout = colorChangeSetter => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  /* перевіряємо, чи змонтувався компонент
Якщо цього ще не сталося -відобразимо порожній div: */
  if (!componentMounted) {
    return <div />;
  }
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Container>
          <Header>
            <Logo to="/">
              <span role="img" aria-label="film icon">
                <BsFilm size="20px" />
              </span>
              GoFilm
            </Logo>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </nav>
            <ToggleDarkLightMode theme={theme} toggleTheme={toggleTheme} />
          </Header>
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};
