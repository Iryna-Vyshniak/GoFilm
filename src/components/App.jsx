import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { ToastContainer, Slide, toast } from 'react-toastify';
import { notifyOptions } from 'utils/notify';
import 'react-toastify/dist/ReactToastify.css';

import { TiMediaEjectOutline } from 'react-icons/ti';
import { Layout } from './Layout/Layout';
import { BtnScrollToTop } from './App.styled';

export const App = () => {
  const [textSearch, setTextSearch] = useState('');
  const [page, setPage] = useState(1);

  // якщо картинки по введеному слову знайдені - повторний запит при такому ж слові не відбувається; інакше - новий запит по новому слову та встановлення пошуку з 1 сторінки
  const handleSearchSubmit = value => {
    if (value === textSearch) {
      return toast.warn(
        `We already found images for ${value.toUpperCase()}.
         Please, enter another phrase`,
        notifyOptions
      );
    }
    setTextSearch(value);
    setPage(1);
  };

  // custom method to btn load
  const handleLoadMore = () => {
    setPage(prevSate => prevSate + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchSubmit} />
      <Layout>
        <ImageGallery
          value={textSearch}
          page={page}
          onLoadMore={handleLoadMore}
        />
      </Layout>
      <BtnScrollToTop
        showUnder={120}
        style={{
          bottom: 35,
          backgroundColor: 'rgba(185, 228, 201, 0.8)',
          padding: '8px',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <TiMediaEjectOutline
          size="24"
          fill="#FD5523"
          strokeWidth="0.2px"
          stroke="#fff"
        />
      </BtnScrollToTop>
      <ToastContainer transition={Slide} draggablePercent={60} />
      <GlobalStyle />
    </>
  );
};
