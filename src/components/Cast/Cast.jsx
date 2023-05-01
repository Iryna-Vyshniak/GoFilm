import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Title/Title';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMoviesCast } from 'services/themoviedbAPI';
import {
  CastItem,
  CastList,
  CastPhoto,
  CastPhotoThumb,
  MovieHero,
  Wrap,
} from './Cast.styled';
import Avatar from 'assets/avatar.png';
import { useTranslation } from 'react-i18next';

const Cast = ({ lng }) => {
  //console.log('Cast:', lng);
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesCast(movieId, lng);
        setCastList(data);
      } catch (error) {
        setError(`{t('moviesPage.set_error')}`);
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
      <Title title={t('moviesPage.cast')} />
      {isLoading && <Loader />}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}
      {error && !isLoading && (
        <span style={{ color: 'red' }}>{t('moviesPage.cast_desription')}</span>
      )}
      {castList.length > 0 ? (
        <CastList>
          {castList.map(actor => (
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
                <p>{actor.name}</p>
                <p>
                  {t('moviesPage.character')}
                  <MovieHero>{actor.character}</MovieHero>
                </p>
              </Wrap>
            </CastItem>
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

Cast.propTypes = {
  lng: PropTypes.string.isRequired,
};
