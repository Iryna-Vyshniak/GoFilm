import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rating } from '@mui/material';
import PropTypes from 'prop-types';

import NoPoster from 'assets/no-poster.jpg';

import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import { Genres } from 'components/Genres/Genres';

import {
  CircleRating,
  GenresBlock,
  MovieListItem,
  MoviePoster,
} from './CardFilm.styled';

export const CardFilm = ({
  movie: { id, poster_path, original_title, vote_average, genre_ids },
}) => {
  const [ratingValue] = useState((vote_average / 10) * 5);

  const { i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <MovieListItem>
      <Link to={`/movies/${id}`}>
        <MoviePoster>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
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
              name="controlled-rating"
              value={ratingValue}
              precision={0.5}
              size="middle"
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
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number,
    genre_ids: PropTypes.any,
  }).isRequired,
};
