//import { lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
//import { Layout } from './Layout/Layout';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        {/* <Route path="/movies/:movieId" element="" />
        <Route path="/movies/:movieId/cast" element="" />
        <Route path="/movies/:movieId/reviews " element="" /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
