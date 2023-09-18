import PropTypes from 'prop-types';

import { Genre, GenresBlock } from './Genres.styled';

export const Genres = ({ data, genres }) => {
  return (
    <>
      {genres && (
        <GenresBlock>
          {genres?.map(genre => {
            if (data.includes(genre.id)) {
              return <Genre key={genre.id}>{genre.name}</Genre>;
            }
            return null;
          })}
        </GenresBlock>
      )}
    </>
  );
};

Genres.propTypes = {
  data: PropTypes.array.isRequired,
  genres: PropTypes.array
};
