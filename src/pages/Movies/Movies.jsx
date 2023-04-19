import React from 'react';
import { MoviesBlock } from './Movies.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Link } from 'react-router-dom';
import { InitialStateGallery } from 'components/InitialStateGallery/InitialStateGallery';

const Movies = () => {
  // useEffect(() => {
  // http запит
  // }, [])
  return (
    <MoviesBlock>
      <Searchbar />
      {/* стартове дефолтне зображення в галереї до рендеру фільмів */}
      <InitialStateGallery text="Let`s find movies together!" />
      <div>
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        ))}
      </div>
    </MoviesBlock>
  );
};

export default Movies;
