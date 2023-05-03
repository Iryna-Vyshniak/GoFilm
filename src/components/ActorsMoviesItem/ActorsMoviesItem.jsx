import { Genres } from 'components/Genres/Genres';
import {
  CardWrapper,
  MoviePoster,
  MovieTitle,
  GenresBlock,
  CircleRating,
} from './ActorsMoviesItem.styled';
import NoPoster from 'assets/no-poster.jpg';
import { Rating } from '@mui/material';
import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';

export const ActorsMoviesItem = ({
  movie: { poster_path, title, original_title, vote_average, genre_ids },
  lng,
}) => {
  return (
    <>
      <CardWrapper>
        <MoviePoster>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : NoPoster
            }
            alt={original_title}
            width={300}
          />
        </MoviePoster>
        <MovieTitle>{title}</MovieTitle>
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
      </CardWrapper>
    </>
  );
};
