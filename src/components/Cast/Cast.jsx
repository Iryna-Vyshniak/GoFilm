import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Title/Title';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const Cast = () => {
  //const params = useParams();
  const { movieId } = useParams();
  //console.log(movieId);
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesCast(movieId);
        setCastList(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  if (!castList) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Title title="Cast" />
      {isLoading && <Loader />}
      {error && <ImageErrorView message="Oops, mistake! Please try again" />}
      {error && !isLoading && (
        <span style={{ color: 'red' }}>Actor info not found</span>
      )}
      {!error && (
        <CastList>
          {castList.map(actor => (
            <CastItem key={actor.id}>
              <CastPhotoThumb>
                <CastPhoto
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : Avatar
                  }
                  alt={actor.name}
                  width="120"
                />
              </CastPhotoThumb>

              <Wrap>
                <p>{actor.name}</p>
                <p>
                  Character: <MovieHero>{actor.character}</MovieHero>
                </p>
              </Wrap>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
