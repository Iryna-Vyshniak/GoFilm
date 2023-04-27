import React from 'react';
import {
  CircleRating,
  GenresBlock,
  MovieListItem,
  MoviePoster,
  MovieTitle,
  ReleaseDate,
  Stars,
} from './MovieGalleryItem.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';

import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import NoPoster from 'assets/no-poster.jpg';
import { Genres } from 'components/Genres/Genres';

export const MovieGalleryItem = ({
  movie: {
    id,
    poster_path,
    original_title,
    release_date,
    vote_average,
    genre_ids,
  },
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
                : NoPoster
            }
            alt={original_title}
            width="200"
          />
        </MoviePoster>
        <MovieTitle>{original_title}</MovieTitle>
        {release_date && <ReleaseDate>{parseInt(release_date)}</ReleaseDate>}
        {vote_average !== 0 && (
          <Stars>
            <Rating
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
              }}
              name="read-only"
              defaultValue={(vote_average / 10) * 5}
              precision={0.5}
              size="small"
              readOnly
            />
          </Stars>
        )}
        {vote_average !== 0 && (
          <CircleRating>
            <RatingProgressbar rating={vote_average.toFixed(1)} />
          </CircleRating>
        )}
      </Link>
      <GenresBlock>
        <Genres data={genre_ids?.slice(0, 1)} />
      </GenresBlock>
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
