import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'modules/SharedLayout/SharedLayout';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('../modules/Cast/Cast'));
const Reviews = lazy(() =>
  import('../modules/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews
  }))
); // if doesn`t have default export

const ActorsPage = lazy(() => import('pages/ActorsPage/ActorsPage'));
const ActorsMovies = lazy(() => import('../modules/ActorsMovies/ActorsMovies'));
const ActorDetailsPage = lazy(() => import('pages/ActorDetailsPage/ActorDetailsPage'));

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="actors" element={<ActorsPage />} />
        <Route path="actors/:personId" element={<ActorDetailsPage />}>
          <Route path="actors-movies" element={<ActorsMovies />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
