import React from 'react';
import { LoaderBackdrop } from './Loader.styled';
import RingLoader from 'react-spinners/RingLoader';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <RingLoader
        color="#f68000"
        size={150}
        cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
      />
    </LoaderBackdrop>
  );
};
