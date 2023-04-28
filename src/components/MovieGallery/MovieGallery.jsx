import { MovieListStyled } from './MovieGallery.styled';
import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieGallery = ({ movies}) => {
  const location = useLocation();
  //console.log(movies);
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieGalleryItem
          key={movie.id}
          movie={movie}
          state={{ from: location }}
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
};
