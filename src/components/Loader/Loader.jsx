import React from 'react';
import { LoaderBackdrop, PendingDog } from './Loader.styled';
import Dog from 'assets/pending.png';
import DotLoader from 'react-spinners/DotLoader';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <DotLoader
        color="#f68000"
        size={150}
        cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
      />
      <PendingDog src={Dog} alt="Dog" />
    </LoaderBackdrop>
  );
};
