import React from 'react';
import { Container } from './Layout.styled';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
