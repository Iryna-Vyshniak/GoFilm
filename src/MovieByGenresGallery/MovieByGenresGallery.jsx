import { MovieListStyled } from './MovieByGenresGallery.styled';
import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
//import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieByGenresGallery = ({ movies }) => {
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

// MovieByGenresGallery.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
