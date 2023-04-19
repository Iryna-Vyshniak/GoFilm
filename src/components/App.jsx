//import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
// const Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies/Movies'));

// import { Layout } from './Layout/Layout';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<div>Element Movies</div>} />
          {/* <Route path="/movies/:movieId/cast" element="" /> */}
          {/*   <Route path="/movies/:movieId/reviews " element="" />  */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
