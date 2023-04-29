import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxThickArrowUp } from 'react-icons/rx';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PageNotFound } from './PageNotFound/PageNotFound';
import ScrollToTop from 'react-scroll-up';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
// if doesn`t have default export
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'uk',
    name: 'Українська',
    country_code: 'ua',
  },
];

export const App = () => {
  const currentLanguageCode = window.localStorage.getItem('i18nextLng') || 'en';
  console.log(currentLanguageCode);

  const currentLanguage = languages.find(
    lang => lang.code === currentLanguageCode
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              currentLanguage={currentLanguage}
              languages={languages}
            />
          }
        >
          <Route
            index
            element={<Home currentLanguage={currentLanguageCode} />}
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
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
