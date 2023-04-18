import { lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
//import { Home } from 'pages/Home/Home';
const Home = lazy(() => import('pages/Home/Home'));

//import { Layout } from './Layout/Layout';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>Element Movies</div>} />
        {/* <Route path="/movies/:movieId/cast" element="" /> */}
        {/*   <Route path="/movies/:movieId/reviews " element="" />  */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <GlobalStyle />
    </div>
  );
};
