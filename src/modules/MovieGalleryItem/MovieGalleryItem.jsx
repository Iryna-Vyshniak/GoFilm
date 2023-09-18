import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import NoPoster from 'assets/no-poster.jpg';
import { Genres } from 'components/Genres/Genres';

import {
  CircleRating,
  GenresBlock,
  MovieListItem,
  MoviePoster,
  MovieTitle,
  ReleaseDate,
  Stars
} from './MovieGalleryItem.styled';

export const MovieGalleryItem = ({
  movie: { id, poster_path, title, original_title, release_date, vote_average, genre_ids },
  state,
  genres
}) => {
  return (
    <MovieListItem>
      <Link to={`/movies/${id}`} state={state}>
        <MoviePoster>
          <img
            src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : NoPoster}
            alt={original_title}
            width="200"
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

        {release_date && <ReleaseDate>{parseInt(release_date)}</ReleaseDate>}
        {vote_average !== 0 && (
          <Stars>
            <Rating
              style={{
                position: 'absolute',
                top: '0',
                right: '0'
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
        <Genres data={genre_ids?.slice(0, 1)} genres={genres} />
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
    vote_average: PropTypes.number
  }).isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
  genres: PropTypes.array.isRequired
};
