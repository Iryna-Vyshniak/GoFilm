import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { MovieGalleryItem } from 'modules/MovieGalleryItem/MovieGalleryItem';

import { MovieListStyled } from './MovieGallery.styled';

export const MovieGallery = ({ movies, genres }) => {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieGalleryItem key={movie.id} movie={movie} genres={genres} state={{ from: location }} />
      ))}
    </MovieListStyled>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ),
  genres: PropTypes.array
};
