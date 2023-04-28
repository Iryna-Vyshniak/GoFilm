import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { useEffect } from 'react';
import { useState } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getGenresMovies } from 'services/themoviedbAPI';

const animatedComponents = makeAnimated();

export const GenresSelect = ({ onSelect, t }) => {
  const [genres, setGenres] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontSize: '14px',
      color: state.isSelected ? '#212529' : '#fd5523',
      backgroundColor: state.isSelected
        ? 'rgba(185, 228, 201, 0.773)'
        : '#FFFBE6',
    }),

    control: defaultStyles => ({
      ...defaultStyles,
      backgroundColor: 'rgba(185, 228, 201, 0.773)',
      border: 'none',
      boxShadow: 'none',
    }),
    singleValue: defaultStyles => ({
      ...defaultStyles,
      color: '#FFF',
      backgroundColor: '#fd5523',
      borderRadius: '30px',
      maxWidth: '45%',
      padding: '5px 10px',
      marginLeft: '30px',
    }),
  };

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
        //console.log(genresData);
        setGenres(genresData);
      } catch (error) {
        setError(`{t('moviesPage.set_error')}`);
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
    <>
      <Select
        options={options}
        isLoading={isLoading}
        onChange={option => (!option ? '' : onSelect(option.value))}
        placeholder={t('moviesPage.placeholder_genres')}
        components={animatedComponents}
        isClearable={true}
        styles={customStyles}
        className="react-select-container"
        classNamePrefix="react-select"
      />
      {error && !isLoading && (
        <ImageErrorView message={t('moviesPage.mistake')} />
      )}
    </>
  );
};
