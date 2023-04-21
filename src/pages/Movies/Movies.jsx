import React, { useEffect, useState } from 'react';

import { Btn, MoviesBlock } from './Movies.styled';
import { Link, useSearchParams } from 'react-router-dom';
import { InitialStateGallery } from 'components/InitialStateGallery/InitialStateGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getMoviesByQuery, getPopularMovies } from 'services/themoviedbAPI';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

import { Autoplay, Scrollbar, EffectCoverflow } from 'swiper';

import Grid2 from '@mui/material/Unstable_Grid2';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import NoPoster from 'assets/no-poster.jpg';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [total_results, setTotalResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  //console.log(movieId);

  useEffect(() => {
    if (query === '') {
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getMoviesByQuery(query, page);
        //console.log(data.results);
        setMovies(prevMovie => [...prevMovie, ...data.results]);
        setTotalResults(data.total_results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, page]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getPopularMovies(page);
        //console.log(data);
        setFilms(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  if (!films) {
    return <div>Loading...</div>;
  }

  //console.log(movies);

  const updateQueryString = inputValue => {
    setPage(1);
    setMovies([]);
    setSearchParams(inputValue !== '' ? { query: inputValue } : {});
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  //console.log(films);

  return (
    <MoviesBlock>
      <Searchbar onSubmit={updateQueryString} />
      {/* стартове дефолтне зображення в галереї до рендеру фільмів */}
      {isLoading && <Loader />}
      {error && <ImageErrorView message="Oops, mistake! Please try again" />}
      {!query && <InitialStateGallery text="Let`s find movies together!" />}
      {query && <MovieGallery movies={movies} />}
      {total_results / 20 >= page && <Btn onClick={onLoadMore}>Load More</Btn>}
      {!error && films.length !== 0 && (
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
            <Grid2 container spacing={1}>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                modules={[Autoplay, EffectCoverflow]}
                loop={true}
                autoplay={{
                  delay: 1900,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
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
                {films.map(movie => {
                  return (
                    <SwiperSlide key={movie.id}>
                      <Link to={`/movies/${movie.id}`}>
                        <img
                          src={
                            movie.poster_path
                              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                              : NoPoster
                          }
                          alt={movie.original_title}
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid2>
          </Grid2>
        </>
      )}
    </MoviesBlock>
  );
};

export default Movies;
