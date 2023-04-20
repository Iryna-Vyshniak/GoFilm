import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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

export const Reviews = () => {
  //const params = useParams();
  const { movieId } = useParams();
  //console.log(movieId);
  const [movieReviews, setMovieReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  if (!movieReviews) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Title title="Reviews" />
      {isLoading && <Loader />}
      {error && <ImageErrorView message="Oops, mistake! Please try again" />}
      {movieReviews.length !== 0 ? (
        <ReviewsList>
          {movieReviews.map(review => (
            <ReviewItem key={review.id}>
              <Wrap>
                <ReviewPhotoThumb>
                  <ReviewPhoto
                    src={
                      !review.avatar_path
                        ? Avatar
                        : `https://secure.gravatar.com/avatar${review.avatar_path}`
                    }
                    alt={review.author}
                  />
                </ReviewPhotoThumb>
                <ReviewsAuthor>Author: {review.author}</ReviewsAuthor>
              </Wrap>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};
