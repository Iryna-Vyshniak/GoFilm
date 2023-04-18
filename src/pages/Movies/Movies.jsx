import React from 'react';
import { MoviesBlock } from './Movies.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  // useEffect(() => {
  // http запит
  // }, [])
  return (
    <MoviesBlock>
      <Searchbar />
    </MoviesBlock>
  );
};

export default Movies;
