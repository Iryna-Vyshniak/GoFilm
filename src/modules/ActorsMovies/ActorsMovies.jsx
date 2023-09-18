import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMoviesbyActors } from 'services/themoviedbAPI';
import { useTranslation } from 'react-i18next';

import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { ActorsMoviesItem } from 'modules/ActorsMoviesItem/ActorsMoviesItem';

import { ActorMoviesList, MovieListItem } from './ActorsMovies.styled';

const ActorsMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  // звертаємось до динамічної частини адреси і отрмуємо ключ для подальшого отримання динамічних даних
  const { personId } = useParams();

  const location = useLocation();
  const { i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const dataMovies = await getMoviesbyActors(personId, lng);
        setMovies(dataMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [personId, lng]);

  if (!movies) {
    return <div>{t('loading')}</div>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}

      {!error && (
        <ActorMoviesList>
          {movies.map(movie => (
            <MovieListItem key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <ActorsMoviesItem key={movie.id} movie={movie} />
              </Link>
            </MovieListItem>
          ))}
        </ActorMoviesList>
      )}
    </>
  );
};

export default ActorsMovies;
