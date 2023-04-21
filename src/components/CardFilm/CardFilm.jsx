import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoPoster from 'assets/no-poster.jpg';
import { MovieListItem, MoviePoster } from './CardFilm.styled';
import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';

export const CardFilm = ({
  movie: { id, poster_path, original_title, vote_average },
}) => {
  return (
    <MovieListItem>
      <Link to={`/movies/${id}`}>
        <MoviePoster>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : NoPoster
            }
            alt={original_title}
            width="200"
          />
        </MoviePoster>
        {vote_average !== 0 && (
          <RatingProgressbar rating={vote_average.toFixed(1)} />
        )}
      </Link>
    </MovieListItem>
  );
};

CardFilm.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};
