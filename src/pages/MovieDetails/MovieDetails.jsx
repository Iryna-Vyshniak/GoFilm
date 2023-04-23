import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { LinkToBack } from 'components/LinkToBack/LinkToBack';
import { FaYoutube } from 'react-icons/fa';

import {
  AccentText,
  BackdropContainer,
  BackdropImage,
  BackdropImg,
  BackdropPoster,
  Btn,
  CircleRating,
  Genre,
  Genres,
  GradientBlockBottom,
  GradientBlockTop,
  HeroContainer,
  MainTitle,
  MovieInfo,
  MovieList,
  NavLink,
  PosterMovie,
  ProductionLogo,
  VotePlayVideoBox,
  WrapRelease,
  WrapperDetails,
  WrapperMovie,
} from './MovieDetails.styled';

import { getMoviesDetailsById, getVideosMovies } from 'services/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import { ModalVideo } from 'components/Modal/Modal';

import HeroPoster from 'assets/hero-poster.jpeg';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieVideo, setMovieVideo] = useState('');

  const [modalIsOpen, setIsOpen] = useState(false);

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
        // console.log(data);
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
        //console.log(data);
        if (data.length === 0) {
          return setMovieVideo(data);
        }

        //trailer ключ для відображення трейлеру фільму
        const trailer = data.find(
          movie =>
            movie.name === 'official trailer' ||
            movie.name === 'Official Trailer' ||
            movie.name.includes('Official') ||
            movie.name[0]
        );
        setMovieVideo(trailer.key);
        console.log(trailer.key);

        /*   const trailer = data[0].key;
        console.log(trailer);
        setMovieVideo(trailer); */
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  if (!movieId) {
    return;
  }

  //  переведення хвилин для перегляду фільму в години та хвилини
  const toHoursAndMinutes = totalMinutes => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };

  // тогл закриття-відривання модалки для перегляду фільму
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  // закриття-відривання модалки для перегляду фільму
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    production_companies,
    backdrop_path,
  } = movieDetails;

  return (
    <>
      {isLoading && <Loader />}
      {error && <ImageErrorView message="Oops, mistake! Please try again" />}

      {!error && (
        <>
          {/* фонове зображення */}
          {backdrop_path && (
            <>
              <BackdropContainer>
                <GradientBlockTop></GradientBlockTop>
                {poster_path ? (
                  <BackdropPoster>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt="poster opacity"
                      width="1200"
                    />
                  </BackdropPoster>
                ) : (
                  <BackdropPoster>
                    <img src={HeroPoster} alt="poster opacity" width="1200" />
                  </BackdropPoster>
                )}
                <GradientBlockBottom></GradientBlockBottom>
              </BackdropContainer>
            </>
          )}
          <WrapperMovie>
            {/* постер фільму */}
            {`https://image.tmdb.org/t/p/w500${poster_path}` && (
              <PosterMovie
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
                width="300"
              />
            )}

            <WrapperDetails>
              {/* назва фільму */}
              <MainTitle>
                {original_title || original_name}{' '}
                {release_date && <span> ({parseInt(release_date)})</span>}
              </MainTitle>

              {/* жанри фільму */}
              {genres && (
                <Genres>
                  {genres.map((genre, index) => (
                    <Genre key={index}>{genre.name}</Genre>
                  ))}
                </Genres>
              )}

              {/* рейтинг фільму */}
              <VotePlayVideoBox>
                {vote_average && vote_average !== 0 ? (
                  <CircleRating>
                    <RatingProgressbar rating={vote_average.toFixed(1)} />
                  </CircleRating>
                ) : (
                  ''
                )}
                {/* трейлер фільму */}
                {movieVideo.length > 0 && (
                  <Btn onClick={openModal}>
                    <FaYoutube
                      size="64px"
                      color="red"
                      style={{ marginLeft: '10px' }}
                    />
                  </Btn>
                )}
              </VotePlayVideoBox>
              {/* огляд фільму */}
              <h2>Overview</h2>
              <p>{overview}</p>
              {/* продакшин компанії - логотипи */}
              {production_companies && (
                <>
                  <h2>Production Companies</h2>
                  <MovieList>
                    {production_companies.map(
                      (production, idx) =>
                        production.logo_path !== null && (
                          <li key={idx}>
                            <ProductionLogo
                              src={`https://image.tmdb.org/t/p/w500${production.logo_path}`}
                              alt="company logo"
                              width="80"
                            />
                          </li>
                        )
                    )}
                  </MovieList>
                </>
              )}
              {/* статус, реліз та загальний час на перегляд фільму */}
              <WrapRelease>
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
                {runtime !== 0 && (
                  <div>
                    <AccentText>Runtime: </AccentText>
                    <span>{toHoursAndMinutes(runtime)}</span>
                  </div>
                )}
              </WrapRelease>
            </WrapperDetails>
          </WrapperMovie>
          {/* внутрішня маршрутизація на кастинг та огляд фільму */}
          <MovieInfo>
            <h1>Additional information</h1>
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
          {/* плеєр для перегляду трейлера фільму - в модальному вікні */}
          {modalIsOpen && (
            <ModalVideo
              isOpen={modalIsOpen}
              onClose={closeModal}
              movieVideo={movieVideo}
            />
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
