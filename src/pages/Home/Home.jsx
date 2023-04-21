import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomeBlock } from './Home.styled';
import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { getPopularMovies } from 'services/themoviedbAPI';

// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

import { Autoplay, EffectCoverflow } from 'swiper';
import { CardFilm } from 'components/CardFilm/CardFilm';
import Grid2 from '@mui/material/Unstable_Grid2';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const page = Number(searchParams.get('page'));

  //console.log(page);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getPopularMovies(page);
        //console.log(data);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  //console.log(movies);

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
      {error && <ImageErrorView message="Oops, mistake! Please try again" />}
      {!error && movies.length !== 0 && (
        <>
          <Grid2
            container
            spacing={1}
            rowSpacing={1}
            component="section"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Title title="Watch Popular Movies" />
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
                {movies.map(movie => {
                  return (
                    <SwiperSlide key={movie.id}>
                      <CardFilm movie={movie} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid2>
          </Grid2>
          <Title title="Trending Today" />
          <MovieGallery movies={movies} />
          <Pagination handlePageClick={handlePageClick} pages={totalPages} />
        </>
      )}
    </HomeBlock>
  );
};

export default Home;
