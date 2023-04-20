import React from 'react';
import {
  MovieListItem,
  MoviePoster,
  MovieTitle,
  ReleaseDate,
} from './MovieGalleryItem.styled';
import { Link } from 'react-router-dom';

import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import PropTypes from 'prop-types';

export const MovieGalleryItem = ({
  movie: { id, poster_path, original_title, release_date, vote_average },
  state,
}) => {
  //console.log(movie);
  return (
    <MovieListItem>
      <Link to={`/movies/${id}`} state={state}>
        <MoviePoster>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`
            }
            alt={original_title}
            width="200"
          />
        </MoviePoster>
        <MovieTitle>{original_title}</MovieTitle>
        <ReleaseDate>{parseInt(release_date)}</ReleaseDate>
        {vote_average !== 0 && (
          <RatingProgressbar rating={vote_average.toFixed(1)} />
        )}
      </Link>
    </MovieListItem>
  );
};

MovieGalleryItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};
