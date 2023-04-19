import React, { useState } from 'react';
import { MoviesBlock } from './Movies.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { InitialStateGallery } from 'components/InitialStateGallery/InitialStateGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [films /* setFilms */] = useState([
    'film-1',
    'film-2',
    'film-3',
    'film-4',
    'film-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  //console.log(movieId);

  // useEffect(() => {
  // http запит
  // }, [movieId])

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    //console.log(movieIdValue);
    // setSearchParams = e.target.value === '' ?  {} : { movieId: e.target.value };
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleFilms = films.filter(film =>
    film.toLowerCase().includes(movieId.toLowerCase())
  );

  //console.log(location);

  return (
    <MoviesBlock>
      <Searchbar value={movieId} onChange={updateQueryString} />
      {/* стартове дефолтне зображення в галереї до рендеру фільмів */}
      <InitialStateGallery text="Let`s find movies together!" />
      <ul>
        {visibleFilms.map(film => (
          <li key={film}>
            <Link key={film} to={`${film}`} state={{ from: location }}>
              {film}
            </Link>
          </li>
        ))}
      </ul>
    </MoviesBlock>
  );
};

export default Movies;
