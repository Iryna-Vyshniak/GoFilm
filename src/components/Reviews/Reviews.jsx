import React from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  //const params = useParams();
  const { movieId } = useParams();
  console.log(movieId);

  return <div>Reviews</div>;
};
