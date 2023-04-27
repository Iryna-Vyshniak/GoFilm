import React, { useEffect, useState } from 'react';
import { getGenresMovies } from 'services/themoviedbAPI';
import { Genre, GenresBlock } from './Genres.styled';

export const Genres = ({ data }) => {
  const [genres, setGenres] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // genres
  useEffect(() => {
    // const abortController = new AbortController();
    async function getGenres() {
      try {
        setIsLoading(true);
        setError(null);

        // const genresData = await getGenresMovies(abortController);
        // setError(null);
        const genresData = await getGenresMovies(data);
        setGenres(genresData);
      } catch (error) {
        setError('Something went wrong, reload the page, it might help 🥹');
      } finally {
        setIsLoading(false);
      }
    }
    getGenres();
    // return () => abortController.abort();
  }, [data]);

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

      {error && !isLoading && console.log('Oops, mistake... Please try again')}
    </>
  );
};
