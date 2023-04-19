import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  //const params = useParams();
  const { movieId } = useParams();
  console.log(movieId);

  /* useEffects(() => {}, []) */

  return (
    <>
      <div>MovieDetails</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
