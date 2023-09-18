import { Rating, Tooltip } from '@mui/material';

import { Genres } from 'components/Genres/Genres';

import NoPoster from 'assets/no-poster.jpg';
import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';

import {
  CardWrapper,
  MoviePoster,
  MovieTitle,
  GenresBlock,
  CircleRating
} from './ActorsMoviesItem.styled';

export const ActorsMoviesItem = ({
  movie: { poster_path, title, original_title, vote_average, genre_ids }
}) => {
  return (
    <>
      <CardWrapper>
        <MoviePoster>
          <img
            src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : NoPoster}
            alt={original_title}
            width={300}
          />
        </MoviePoster>
        <Tooltip
          title="Click for watch more"
          describeChild
          PopperProps={{
            sx: {
              '& .MuiTooltip-tooltip': {
                bgcolor: '#B9E4C9',
                color: '#000',
                width: '250px',
                textAlign: 'center'
              }
            }
          }}
        >
          <MovieTitle>{title}</MovieTitle>
        </Tooltip>

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
          <Genres data={genre_ids?.slice(0, 2)} />
        </GenresBlock>
      </CardWrapper>
    </>
  );
};
