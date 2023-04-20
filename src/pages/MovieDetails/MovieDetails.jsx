import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { LinkToBack } from 'components/LinkToBack/LinkToBack';
import { FaYoutube } from 'react-icons/fa';

import {
  AccentText,
  Btn,
  MovieInfo,
  NavLink,
  PlayBox,
  WrapperMovie,
} from './MovieDetails.styled';

import { getMoviesDetailsById, getVideosMovies } from 'services/themoviedbAPI';
import { Title } from 'components/Title/Title';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import { Modal } from 'components/Modal/Modal';
import ReactPlayer from 'react-player/youtube';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieVideo, setMovieVideo] = useState('');
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  //const params = useParams();
  const { movieId } = useParams();
  //console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesDetailsById(movieId);
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();

    (async () => {
      try {
        const data = await getVideosMovies(movieId);
        console.log(data);
        if (data.length === 0) {
          setMovieVideo(data);
          return;
        }

        const key = data.find(
          movie =>
            movie.name === 'official trailer' ||
            movie.name === 'Official Trailer' ||
            movie.name.includes('Official') ||
            movie.name[0]
        );
        setMovieVideo(key.key);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  if (!movieId) {
    return;
  }

  const toHoursAndMinutes = totalMinutes => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    vote_average,
    genres,
    overview,
    status,
    runtime,
  } = movieDetails;

  return (
    <>
      <Title title="Movie Details" />
      {isLoading && <Loader />}
      {error && <ImageErrorView message="Oops, mistake! Please try again" />}
      <WrapperMovie>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
          width="300"
        />
        <div>
          <h1>
            {original_title || original_name} (
            <span>{parseInt(release_date)}</span>)
          </h1>
          <div style={{ position: 'relative' }}>
            {/*  User Score: { {Math.round(vote_average * 10)}% } 
            {vote_average !== 0 ? (
              <RatingProgressbar rating={Math.round(vote_average * 10)} />
            ) : (
              '0%'
            )}*/}
            {vote_average && (
              <RatingProgressbar
                style={{ bottom: '0', width: '44px', height: '44px' }}
                rating={vote_average.toFixed(1)}
              />
            )}

            {movieVideo.length > 0 && (
              <PlayBox>
                <Btn onClick={toggleModal}>
                  <FaYoutube
                    size="34px"
                    color="red"
                    style={{ marginRight: '10px' }}
                  />
                </Btn>
                <span>Watch Trailer</span>
              </PlayBox>
            )}
          </div>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres &&
              genres.map((genre, index) => (
                <span key={index} style={{ marginRight: '10px' }}>
                  {genre.name} /
                </span>
              ))}
          </p>
          {status && (
            <div>
              <AccentText>Status: </AccentText>
              <span>{status}</span>
            </div>
          )}
          {release_date && (
            <div>
              <AccentText>Release Date: </AccentText>
              <span>{dayjs(release_date).format('MMM D, YYYY')}</span>
            </div>
          )}
          {runtime && (
            <div>
              <AccentText>Runtime: </AccentText>
              <span>{toHoursAndMinutes(runtime)}</span>
            </div>
          )}
        </div>
      </WrapperMovie>
      <MovieInfo>
        <h1>MovieDetails</h1>
        <LinkToBack
          to={backLinkLocationRef.current}
          children="Back to Movies"
        />
        <nav>
          <NavLink to="cast" state={location.state}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={location.state}>
            Reviews
          </NavLink>
        </nav>
      </MovieInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <ReactPlayer
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${movieVideo}`}
          />
        </Modal>
      )}
    </>
  );
};

export default MovieDetails;
