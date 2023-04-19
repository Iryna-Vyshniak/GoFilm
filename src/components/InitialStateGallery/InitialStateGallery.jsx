import React from 'react';
import PropTypes from 'prop-types';
import { Hero, Text, Wrapper } from './InitialStateGallery.styled';
import Movie from 'assets/movie.png';

export const InitialStateGallery = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Hero src={Movie} alt="Movie`s attributes" />
    </Wrapper>
  );
};

InitialStateGallery.propTypes = {
  text: PropTypes.string.isRequired,
};
