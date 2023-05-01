import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import PropTypes from 'prop-types';
import NoPoster from 'assets/no-poster.jpg';
import {
  CircleRating,
  GenresBlock,
  MovieListItem,
  MoviePoster,
} from './CardFilm.styled';
import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import { Genres } from 'components/Genres/Genres';

export const CardFilm = ({
  movie: { id, poster_path, original_title, vote_average, genre_ids },
  lng,
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
          <>
            <CircleRating>
              <RatingProgressbar rating={vote_average?.toFixed(1)} />
            </CircleRating>
            <Rating
              name="read-only"
              defaultValue={(vote_average / 10) * 5}
              precision={0.5}
              size="large"
              readOnly
            />
          </>
        )}
        <GenresBlock>
          <Genres data={genre_ids?.slice(0, 2)} lng={lng} />
        </GenresBlock>
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
