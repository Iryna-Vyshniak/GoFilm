import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper';

import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import { MovieGallery } from 'modules/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { getGenresMovies, getPopularMovies, getTopRatedMovies } from 'services/themoviedbAPI';

import { CardFilm } from 'components/CardFilm/CardFilm';
import { HeroBanner } from 'components/HeroBanner/HeroBanner';

import { HomeBlock } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const { i18n } = useTranslation();
  const lng = i18n.language;

  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
  const page = Number(params.page || 1);
  const { t } = useTranslation();

  const location = useLocation();

  // get popular movies
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getPopularMovies(page, lng);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, lng, location.search]);

  // get top rated movies
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getTopRatedMovies(lng);
        setTopMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, lng, location.search]);

  // get genres
  useEffect(() => {
    (async function getGenres() {
      try {
        setIsLoading(true);
        setError(null);

        const genresData = await getGenresMovies(lng);
        setGenres(genresData);
      } catch (error) {
        setError('Something went wrong, reload the page, it might help 🥹');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [lng]);

  if (!movies) {
    return <Loader />;
  }

  return (
    <HomeBlock>
      {isLoading && <Loader />}
      {error && <ImageErrorView message="Oops, mistake... Please try again" />}
      {!error && topMovies.length > 0 && (
        <>
          <HeroBanner movies={movies} />
          <Grid2
            container
            spacing={1}
            rowSpacing={1}
            mb={6}
            component="section"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Title title={t('homePage.top_title')} />
            <Grid2 container spacing={1} padding="8px" mb={5}>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                modules={[EffectCoverflow, Navigation]}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5
                }}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  // when window width is >= 1040px
                  1040: {
                    slidesPerView: 5,
                    spaceBetween: 50
                  }
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
          <MovieGallery movies={movies} genres={genres} />
          <Pagination
            pageCount={totalPages}
            setSearchParams={setSearchParams}
            params={params}
            currentPage={page - 1}
          />
        </>
      )}
    </HomeBlock>
  );
};

export default HomePage;
