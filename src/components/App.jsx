import { lazy } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxThickArrowUp } from 'react-icons/rx';
import PropTypes from 'prop-types';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { GlobalStyle } from 'styles/GlobalStyle';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
// if doesn`t have default export
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

const ActorsPage = lazy(() => import('pages/ActorsPage/ActorsPage'));
const ActorsMovies = lazy(() => import('./ActorsMovies/ActorsMovies'));
const ActorDetailsPage = lazy(() =>
  import('pages/ActorDetailsPage/ActorDetailsPage')
);

export const App = ({ languages }) => {
  const currentLanguageCode = window.localStorage.getItem('i18nextLng') || 'en';
  const currentLanguage = languages?.find(
    lang => lang.code === currentLanguageCode
  );
  const [searchParams] = useSearchParams({ language: currentLanguageCode });
  const lng = searchParams.get('language') ?? currentLanguageCode;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              currentLanguage={currentLanguage}
              languages={languages}
              /* lng={lng} */
            />
          }
        >
          <Route index element={<HomePage lng={lng} />} />
          <Route path="/movies" element={<Movies lng={lng} />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetailsPage lng={lng} />}
          >
            <Route path="/movies/:movieId/cast" element={<Cast lng={lng} />} />
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews lng={lng} />}
            />
          </Route>
          <Route path="/actors" element={<ActorsPage lng={lng} />} />
          <Route
            path="/actors/:personId"
            element={<ActorDetailsPage lng={lng} />}
          >
            <Route
              path="/actors/:personId/actors-movies"
              element={<ActorsMovies lng={lng} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <ScrollToTop
        showUnder={120}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          backgroundColor: 'rgba(185, 228, 201, 0.8)',
          width: '42px',
          height: '42px',
          padding: '8px',
          borderRadius: '50%',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <RxThickArrowUp size="28" strokeWidth="0.2px" />
      </ScrollToTop>
      <ToastContainer transition={Slide} draggablePercent={60} />
      <GlobalStyle />
    </>
  );
};

App.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country_code: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
