import React, { useEffect, useState } from 'react';

import { Btn, MoviesBlock } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import { InitialStateGallery } from 'components/InitialStateGallery/InitialStateGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getMoviesByQuery } from 'services/themoviedbAPI';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [total_results, setTotalResults] = useState(null);

  //const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  //console.log(movieId);

  useEffect(() => {
    if (query === '') {
      return;
    }

    (async () => {
      try {
        const data = await getMoviesByQuery(query, page);
        console.log(data.results);
        setMovies(prevMovie => [...prevMovie, ...data.results]);
        setTotalResults(data.total_results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query, page]);

  if (!movies) {
    return;
  }

  const updateQueryString = inputValue => {
    setPage(1);
    setMovies([]);
    setSearchParams(inputValue !== '' ? { query: inputValue } : {});
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // console.log(movies);

  return (
    <MoviesBlock>
      <Searchbar onSubmit={updateQueryString} />
      {/* стартове дефолтне зображення в галереї до рендеру фільмів */}
      {!query && <InitialStateGallery text="Let`s find movies together!" />}
      {query && <MovieGallery movies={movies} />}
      {total_results / 20 >= page && <Btn onClick={onLoadMore}>Load More</Btn>}
    </MoviesBlock>
  );
};

export default Movies;
