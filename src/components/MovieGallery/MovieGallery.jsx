import { MovieListStyled } from './MovieGallery.styled';
import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieGallery = ({ movies, lng }) => {
  // console.log('MovieGallery:', lng);
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieGalleryItem
          key={movie.id}
          movie={movie}
          state={{ from: location }}
          lng={lng}
        />
      ))}
    </MovieListStyled>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  lng: PropTypes.string.isRequired,
};
