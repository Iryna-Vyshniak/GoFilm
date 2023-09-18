import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { FaYoutube } from 'react-icons/fa';
import { Rating } from '@mui/material';

import { getMoviesDetailsById, getVideosMovies } from 'services/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import { ModalVideo } from 'components/Modal/Modal';
import { LinkToBack } from 'components/LinkToBack/LinkToBack';
import HeroPoster from 'assets/heroBanner.jpg';
import NoPoster from 'assets/no-poster.jpg';

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
  MovieInfoTitle,
  MovieList,
  NavLink,
  PosterMovie,
  ProductionLogo,
  VotePlayVideoBox,
  WrapRelease,
  WrapperDetails,
  WrapperMovie,
  WrapperPicVote
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieVideo, setMovieVideo] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();
  const { t } = useTranslation();

  const { i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMoviesDetailsById(movieId, lng);

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
    title,
    release_date,
    vote_average,
    genres,
    overview,
    status,
    runtime,
    production_companies
  } = movieDetails;

  return (
    <>
      {isLoading && <Loader />}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}

      {!error && (
        <>
          {/* фонове зображення */}
          {poster_path && (
            <>
              <BackdropContainer>
                <GradientBlockTop></GradientBlockTop>
                {`https://image.tmdb.org/t/p/original${poster_path}` && (
                  <BackdropPoster>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/original${poster_path}`
                          : HeroPoster
                      }
                      alt={title || original_title}
                      width="1200"
                    />
                  </BackdropPoster>
                )}
                <GradientBlockBottom></GradientBlockBottom>
              </BackdropContainer>
            </>
          )}
          <WrapperMovie>
            <WrapperPicVote>
              {/* постер фільму */}
              {`https://image.tmdb.org/t/p/original${poster_path}` && (
                <PosterMovie
                  src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : NoPoster}
                  alt={title || original_title}
                  width="500"
                />
              )}
              {(vote_average || vote_average > 0) && (
                <CircleRating>
                  <RatingProgressbar rating={vote_average?.toFixed(1)} />
                </CircleRating>
              )}
            </WrapperPicVote>
            <WrapperDetails>
              {/* назва фільму */}
              <MainTitle>
                {title || original_title}
                {release_date && <span> ({parseInt(release_date)})</span>}
              </MainTitle>
              {/* rating stars */}
              {(vote_average || vote_average > 0) && (
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
              {(vote_average || (movieVideo && movieVideo?.length > 0)) && (
                <VotePlayVideoBox>
                  {/* трейлер фільму */}
                  {movieVideo && movieVideo.length > 0 && (
                    <Btn onClick={toggleModal}>
                      <FaYoutube size="64px" color="red" />
                    </Btn>
                  )}
                </VotePlayVideoBox>
              )}

              {/* огляд фільму */}
              {overview && (
                <>
                  <h2>{t('moviesPage.overview')}</h2>
                  <p>{overview}</p>
                </>
              )}

              {/* продакшин компанії - логотипи */}
              {production_companies && !production_companies.length && (
                <>
                  <h2>{t('moviesPage.production_companies')}</h2>
                  <MovieList>
                    {production_companies
                      ?.map(
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
                      )
                      .slice(0, 2)}
                  </MovieList>
                </>
              )}
              {/* статус, реліз та загальний час на перегляд фільму */}
              <WrapRelease>
                {status && (
                  <div>
                    <AccentText>{t('moviesPage.status')}</AccentText>
                    <span>{status}</span>
                  </div>
                )}
                {release_date && (
                  <div>
                    <AccentText>{t('moviesPage.release_date')}</AccentText>
                    <span>{dayjs(release_date).format('MMM D, YYYY')}</span>
                  </div>
                )}
                {runtime !== 0 && (
                  <div>
                    <AccentText>{t('moviesPage.runtime')}</AccentText>
                    <span>{toHoursAndMinutes(runtime)}</span>
                  </div>
                )}
              </WrapRelease>
            </WrapperDetails>
          </WrapperMovie>
          {/* внутрішня маршрутизація на кастинг та огляд фільму */}
          <MovieInfo>
            <MovieInfoTitle>{t('moviesPage.additional_information')}</MovieInfoTitle>
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

          <ModalVideo isOpen={modalIsOpen} onClose={toggleModal} movieVideo={movieVideo} />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
