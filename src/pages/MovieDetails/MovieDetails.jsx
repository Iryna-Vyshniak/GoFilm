import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { LinkToBack } from 'components/LinkToBack/LinkToBack';
import { FaYoutube } from 'react-icons/fa';
import { Rating } from '@mui/material';
import {
  AccentText,
  BackdropContainer,
  BackdropPoster,
  Btn,
  CircleRating,
  Genre,
  Genres,
  GradientBlockBottom,
  GradientBlockTop,
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
import { useTranslation } from 'react-i18next';

const MovieDetails = ({ lng }) => {
  console.log('MovieDetails:', lng);

  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieVideo, setMovieVideo] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  //const params = useParams();
  const { movieId } = useParams();
  //console.log(movieId);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesDetailsById(movieId, lng);
        //console.log(data);
        setMovieDetails(data);
      } catch (error) {
        <ImageErrorView message={t('moviesPage.set_error')} />;
      } finally {
        setIsLoading(false);
      }
    })();

    (async () => {
      try {
        const data = await getVideosMovies(movieId, t);
        //console.log(data);
        if (data.length === 0) {
          return setMovieVideo(data);
        }

        //trailer ключ для відображення трейлеру фільму
        const trailer = data.find(
          movie =>
            movie.name[0] ||
            movie.name.includes('Official') ||
            movie.name === 'Official Trailer' ||
            movie.name === 'official trailer'
        );
        setMovieVideo(trailer.key);
        //console.log(trailer.key);

        /*   const trailer = data[0].key;
        console.log(trailer);
        setMovieVideo(trailer); */
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId, t, lng]);

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
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
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
    production_companies,
    backdrop_path,
  } = movieDetails;

  return (
    <>
      {isLoading && <Loader />}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}

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
                {original_title || original_name}
                {release_date && <span> ({parseInt(release_date)})</span>}
              </MainTitle>
              {/* rating stars */}
              {vote_average && vote_average !== 0 && (
                <Rating
                  name="read-only"
                  defaultValue={(vote_average / 10) * 5}
                  precision={0.5}
                  size="large"
                  readOnly
                />
              )}
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
                {vote_average && vote_average !== 0 && (
                  <CircleRating>
                    <RatingProgressbar rating={vote_average?.toFixed(1)} />
                  </CircleRating>
                )}
                {/* трейлер фільму */}
                {movieVideo.length > 0 && (
                  <Btn onClick={toggleModal}>
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
              {production_companies && production_companies.length > 0 && (
                <>
                  <h2>Production Companies</h2>
                  <MovieList>
                    {production_companies?.map(
                      (production, idx) =>
                        production.logo_path !== null && (
                          <li key={idx}>
                            <ProductionLogo
                              src={`https://image.tmdb.org/t/p/w500${production.logo_path}`}
                              alt="company logo"
                              width="120"
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
            <h1>{t('moviesPage.additional_information')}</h1>
            <LinkToBack
              to={backLinkLocationRef.current}
              children={t('moviesPage.back_to_movies')}
            />
            <nav>
              <NavLink to="cast" state={location.state}>
                {t('moviesPage.cast')}
              </NavLink>
              <NavLink to="reviews" state={location.state}>
                {t('moviesPage.reviews')}
              </NavLink>
            </nav>
          </MovieInfo>

          <Suspense fallback={<div> {t('loading')}</div>}>
            <Outlet />
          </Suspense>
          {/* плеєр для перегляду трейлера фільму - в модальному вікні
          It's recommended to not use modal with conditional rendering. There is a problem with createPortal when using this way (need to check if it still happening. It starts happening on version +16.3 of react).
          The bug also happens when the Modal lives next to a component that conditionally renders.
          We Can't use:
          {modalIsOpen && (......)
          The best way to use that is creating a component where we have all the code that we need, a componet seems something like this:
          */}

          <ModalVideo
            isOpen={modalIsOpen}
            onClose={toggleModal}
            movieVideo={movieVideo}
          />

          {/* {modalIsOpen && (
            <ModalVideo
              isOpen={modalIsOpen}
              onClose={toggleModal}
              movieVideo={movieVideo}
            />
          )} */}
        </>
      )}
    </>
  );
};

export default MovieDetails;
