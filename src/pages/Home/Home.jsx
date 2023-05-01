import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import i18next from 'i18next';
import { HomeBlock } from './Home.styled';
import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { getPopularMovies, getTopRatedMovies } from 'services/themoviedbAPI';
// import { langs } from 'services/i18next';

// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper';

import { CardFilm } from 'components/CardFilm/CardFilm';
import Grid2 from '@mui/material/Unstable_Grid2';
import { HeroHomePage } from 'components/HeroHomePage/HeroHomePage';
import { useTranslation } from 'react-i18next';

i18next.dir();

const Home = ({ lng }) => {
  //console.log('Home:', lng);
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const page = Number(searchParams.get('page') || 1);
  const { t } = useTranslation();

  //console.log(page);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getPopularMovies(page, lng);
        //console.log(lng);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, lng, location.search]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getTopRatedMovies(lng);
        //console.log(data);
        setTopMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, lng]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  const handlePageClick = e => {
    //console.log(e.selected);
    setSearchParams({ page: e.selected + 1 });
  };

  return (
    <HomeBlock>
      {isLoading && <Loader />}
      {/*  якщо запит відбувся з помилкою - рендериться дефолтне зображення з
      повідомленням помилки */}
      {error && <ImageErrorView message="Oops, mistake... Please try again" />}
      {!error && topMovies.length !== 0 && (
        <>
          <HeroHomePage movies={movies} />
          <Grid2
            container
            spacing={1}
            rowSpacing={1}
            component="section"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginBottom="30px"
          >
            <Title title={t('homePage.top_title')} />
            <Grid2 container spacing={1} padding="8px">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                modules={[Autoplay, EffectCoverflow]}
                loop={true}
                navigation
                autoplay={{
                  delay: 1900,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1040px
                  1040: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {topMovies.map(movie => {
                  return (
                    <SwiperSlide key={movie.id}>
                      <CardFilm movie={movie} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid2>
          </Grid2>
          <Title title={t('homePage.trending_title')} />
          <MovieGallery movies={movies} t={t} lng={lng} />
          <Pagination
            handlePageClick={handlePageClick}
            pages={totalPages}
            currentPage={page}
          />
        </>
      )}
    </HomeBlock>
  );
};

export default Home;
