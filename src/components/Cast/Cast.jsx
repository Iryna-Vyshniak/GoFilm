import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  //const params = useParams();
  const { movieId } = useParams();
  console.log(movieId);

  return <div>Cast</div>;
};

export default Cast;
