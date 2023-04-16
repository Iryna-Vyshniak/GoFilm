import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import imagesAPI from 'services/getImages';

import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { InitialStateGallery } from '../InitialStateGallery/InitialStateGallery';
import { Button } from 'components/Button/Button';
import { errorMessages } from 'utils/errorMessages';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const ImageGallery = ({ value, page, onLoadMore }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // якщо немає пошукового запиту - пошук не відбувається
    if (!value) {
      return;
    }
    // при новому запиті - запит відбувається з 1 сторінки та попередній масив зображень обнуляється
    if (page === 1) {
      setImages([]);
    }

    setStatus(Status.PENDING);

    imagesAPI
      .getImages(value, page)
      .then(images => {
        setImages(prevState => [...prevState, ...images.hits]);
        setTotalPages(Math.floor(images.totalHits / 12));
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [value, page, onLoadMore]);

  // стартове дефолтне зображення в галереї до рендеру карток з зображеннями
  if (status === Status.IDLE) {
    return <InitialStateGallery text="Let`s find images together!" />;
  }
  // при стадії очікування - дозавантаження картинок до вже знайдених + картинка-лоадер, поки дозавантажуються зображення
  if (status === Status.PENDING) {
    return (
      <>
        <List>
          {images.map(image => (
            <ImageGalleryItem key={image.id} item={image} />
          ))}
        </List>
        <Loader />;
      </>
    );
  }
  // якщо запит відбувся з помилкою - рендериться дефолтне зображення з повідомленням помилки
  if (status === Status.REJECTED) {
    return <ImageErrorView message={error.message} />;
  }
  // якщо при запиті зображення не знайдені - рендериться дефолтне зображення з повідомленням
  if (images.length === 0) {
    return <ImageErrorView message={errorMessages.imagesAPI} />;
  }

  // якщо запит успішний  - рендериться галерея зображень
  if (status === Status.RESOLVED) {
    return (
      <>
        <List>
          {images.map(image => (
            <ImageGalleryItem key={image.id} item={image} />
          ))}
        </List>
        {/* якщо при запиті зображення знайдені, запит не в стадії очікування та ще є сторінки з зображеннями - рендериться кнопка Load More*/}
        {images.length > 0 &&
          status !== Status.PENDING &&
          page <= totalPages && <Button onClick={onLoadMore}>Load More</Button>}
      </>
    );
  }
};

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

// !for infinity scroll
// const [offset, setOffset] = useState(0);
// useEffect(() => {
//   const handleScroll = e => {
//     const scrollHeight = e.target.documentElement.scrollHeight;
//     const currentHeight =
//       e.target.documentElement.scrollTop + window.innerHeight;
//     if (currentHeight + 1 >= scrollHeight) {
//       setOffset(offset + 10);
//     }
//   };
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, [offset]);
