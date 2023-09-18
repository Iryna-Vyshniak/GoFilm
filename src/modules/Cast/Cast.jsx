import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { Loader } from 'components/Loader/Loader';
import { getMoviesCast } from 'services/themoviedbAPI';

import Avatar from 'assets/avatar.jpg';

import {
  ActorsCharacter,
  ActorsName,
  CastItem,
  CastList,
  CastPhoto,
  CastPhotoThumb,
  MovieHero,
  Wrap
} from './Cast.styled';

const Cast = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesCast(movieId, lng);
        setCastList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId, lng]);

  if (!castList) {
    return <div>{t('loading')}</div>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}
      {error && !isLoading && (
        <span style={{ color: 'red' }}>{t('moviesPage.cast_desription')}</span>
      )}
      {castList.length > 0 ? (
        <CastList>
          {castList.map(actor => (
            <Link to={`/actors/${actor.id}`} state={{ from: location }} key={actor.id}>
              <CastItem key={actor.id}>
                <CastPhotoThumb>
                  <CastPhoto
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                        : Avatar
                    }
                    alt={actor.name}
                    width="120"
                  />
                </CastPhotoThumb>

                <Wrap>
                  <ActorsName>{actor.name}</ActorsName>
                  {actor.character && (
                    <ActorsCharacter>
                      {t('moviesPage.character')}
                      <MovieHero>{actor.character}</MovieHero>
                    </ActorsCharacter>
                  )}
                </Wrap>
              </CastItem>
            </Link>
          ))}
        </CastList>
      ) : (
        <div style={{ padding: '26px', textAlign: 'center' }}>
          {t('moviesPage.cast_desription')}
        </div>
      )}
    </>
  );
};

export default Cast;
