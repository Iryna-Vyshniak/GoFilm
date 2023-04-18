import React from 'react';
import { MainTitle } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return <MainTitle>{title}</MainTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
