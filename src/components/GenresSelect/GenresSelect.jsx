import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { useEffect } from 'react';
import { useState } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getGenresMovies } from 'services/themoviedbAPI';

const animatedComponents = makeAnimated();

export const GenresSelect = ({ onSelect }) => {
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
        const genresData = await getGenresMovies();
        console.log(genresData);
        setGenres(genresData);
      } catch (error) {
        setError('Something went wrong, reload the page, it might help 🥹');
      } finally {
        setIsLoading(false);
      }
    }
    getGenres();
    // return () => abortController.abort();
  }, []);

  const options = genres?.map(genre => ({
    value: genre.id,
    label: genre.name,
  }));

  return (
    <div>
      <Select
        options={options}
        isLoading={isLoading}
        onChange={option => onSelect(option.value)}
        placeholder="Choose genres"
        autoFocus
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        className="react-select-container genres"
        classNamePrefix="react-select"
        /*  theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#B9E4C9',
            primary: '#FD5523',
          },
        })} */
      />
      {/*  <MovieGalleryByGenres movies={fetchMovies()} /> */}
      {error && !isLoading && (
        <ImageErrorView message="Oops, mistake... Please try again" />
      )}
    </div>
  );
};
