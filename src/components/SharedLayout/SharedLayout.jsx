import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="film icon">
            <BsFilm size="20px" />
          </span>
          GoFilm App
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};
