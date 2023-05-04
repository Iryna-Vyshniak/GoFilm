import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'modules/SharedLayout/SharedLayout';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('../modules/Cast/Cast'));
const Reviews = lazy(() =>
  import('../modules/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
); // if doesn`t have default export

const ActorsPage = lazy(() => import('pages/ActorsPage/ActorsPage'));
const ActorsMovies = lazy(() => import('../modules/ActorsMovies/ActorsMovies'));
const ActorDetailsPage = lazy(() =>
  import('pages/ActorDetailsPage/ActorDetailsPage')
);

const UserRoutes = ({ currentLanguage, languages, lng }) => {
  return (
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
        <Route index element={<HomePage lng={lng} />} />
        <Route path="/movies" element={<Movies lng={lng} />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage lng={lng} />}>
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
  );
};

export default UserRoutes;
