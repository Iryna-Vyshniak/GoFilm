import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Title/Title';
import { getMoviesReviews } from 'services/themoviedbAPI';
import Avatar from 'assets/avatar.png';
import {
  ReviewContent,
  ReviewItem,
  ReviewPhoto,
  ReviewPhotoThumb,
  ReviewsAuthor,
  ReviewsList,
  Wrap,
} from './Reviews.styled';
import { useTranslation } from 'react-i18next';

export const Reviews = ({ lng }) => {
  // console.log('Reviews:', lng);
  //const params = useParams();
  const { movieId } = useParams();
  //console.log(movieId);
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesReviews(movieId, lng);
        setMovieReviews(data);
      } catch (error) {
        setError(`{t('moviesPage.set_error')}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId, lng]);

  if (!movieReviews) {
    return <div>{t('loading')}</div>;
  }

  return (
    <>
      <Title title={t('moviesPage.reviews')} />
      {isLoading && <Loader />}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}
      {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(review => (
            <ReviewItem key={review.id}>
              <Wrap>
                <ReviewPhotoThumb>
                  <ReviewPhoto
                    src={
                      review.avatar_path
                        ? `https://image.tmdb.org/t/p/original${review.avatar_path}`
                        : Avatar
                    }
                    alt={review.author}
                  />
                </ReviewPhotoThumb>
                <ReviewsAuthor>
                  {t('moviesPage.author')}
                  {review.author}
                </ReviewsAuthor>
              </Wrap>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <div style={{ padding: '26px', textAlign: 'center' }}>
          {t('moviesPage.reviews_desription')}
        </div>
      )}
    </>
  );
};

Reviews.propTypes = {
  lng: PropTypes.string.isRequired,
};
