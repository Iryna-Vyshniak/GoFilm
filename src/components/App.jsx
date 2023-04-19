//import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
// const Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/movies/:movieId"
            element={<div>Element Movies ID</div>}
          />
          <Route
            path="/movies/:movieId/cast"
            element={<div>Element Movies ID Cast</div>}
          />
          <Route
            path="/movies/:movieId/reviews "
            element={<div>Element Movies ID Reviews</div>}
          />
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
