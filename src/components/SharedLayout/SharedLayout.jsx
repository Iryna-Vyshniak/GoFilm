import React from 'react';
import { Outlet } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

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
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
