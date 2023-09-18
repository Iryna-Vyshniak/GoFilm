import RingLoader from 'react-spinners/RingLoader';

import { LoaderBackdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <RingLoader color="#f68000" size={150} />
    </LoaderBackdrop>
  );
};
