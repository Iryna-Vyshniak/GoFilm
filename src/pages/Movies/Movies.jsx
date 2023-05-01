import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { notifyOptions } from 'utils/notify';
import 'react-toastify/dist/ReactToastify.css';
// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper';

import Grid2 from '@mui/material/Unstable_Grid2';

import {
  ActorName,
  AvatarWrap,
  BackdropActors,
  BackdropImg,
  BgBlockActors,
  BlockInfoActors,
  Btn,
  GradientBlockBottom,
  GradientBlockTop,
  HeroContainer,
  Known,
  MoviesBlock,
  Poster,
  SectionActors,
  SectionHero,
  SmallText,
  TitleList,
} from './Movies.styled';

import { InitialStateGallery } from 'components/InitialStateGallery/InitialStateGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import {
  getActorsPopular,
  getMoviesByQuery,
  getMoviesWithGenres,
} from 'services/themoviedbAPI';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import NoPoster from 'assets/no-poster.jpg';
import HeroPoster from 'assets/hero-poster.jpeg';
import ActorsBg from 'assets/actors-bg.png';
import { GenresSelect } from 'components/GenresSelect/GenresSelect';
import { Title } from 'components/Title/Title';
import { useTranslation } from 'react-i18next';

const Movies = props => {
  const { lng } = props;
  //console.log('Movies:', lng);
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [data, setData] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const { t } = useTranslation();

  // movies
  useEffect(() => {
    if (!query) return;

    // при новому запиті - запит відбувається з 1 сторінки та попередній масив зображень обнуляється
    if (page === 1) {
      setMovies([]);
    }

    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        setData(null);
        const data = await getMoviesByQuery(query, page, lng);
        //console.log(data.results);
        setMovies(prevMovie => [...prevMovie, ...data.results]);
        setTotalPages(Math.floor(data.total_results / 20));
      } catch (error) {
        setError(error);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, page, lng]);

  // actors
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const dataActors = await getActorsPopular();
        //console.log(data);
        setActors(dataActors);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (!actors) {
    return <div>{t('loading')}</div>;
  }

  const updateQueryString = inputValue => {
    if (inputValue === query) {
      return toast.warn(
        `We already found movies for ${inputValue.toUpperCase()}.
         Please, enter another phrase`,
        notifyOptions
      );
    }
    setPage(1);
    setMovies([]);
    setSearchParams(inputValue !== '' ? { query: inputValue } : {});
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // get movies by genres
  const fetchMovies = async (movieId, lng) => {
    try {
      setIsLoading(true);
      setError(false);
      setMovies([]);
      const moviesData = await getMoviesWithGenres(movieId, lng);
      setData(moviesData.results);
    } catch (error) {
      setData(null);
      setError(<ImageErrorView message={t('moviesPage.mistake')} />);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(movies);
  // console.log(data);
  return (
    <>
      {/* <HeroBanner movies={movies} /> */}
      <MoviesBlock>
        <SectionHero>
          <HeroContainer>
            <GradientBlockTop></GradientBlockTop>

            <BackdropImg>
              <img src={HeroPoster} alt="poster opacity" width="1200" />
            </BackdropImg>

            <GradientBlockBottom></GradientBlockBottom>
          </HeroContainer>
        </SectionHero>
        {/* ПОШУК ФІЛЬМІВ */}
        <Searchbar onSubmit={updateQueryString} t={t} />
        <GenresSelect onSelect={fetchMovies} t={t} lng={lng} />

        {/* стартове дефолтне зображення в галереї до рендеру фільмів */}
        {!query && data === null && (
          <InitialStateGallery />
          // <InitialStateGallery text={t('moviesPage.title')} />
        )}

        {isLoading && <Loader />}
        {/*  якщо запит відбувся з помилкою - рендериться дефолтне зображення з
      повідомленням помилки */}
        {error && <ImageErrorView message={t('moviesPage.mistake')} />}

        {/* якщо при запиті зображення не знайдені - рендериться дефолтне зображення з повідомленням */}
        {totalPages === 0 && data === null && (
          <ImageErrorView message={t('moviesPage.not_found')} />
        )}

        {/* рендер галереї зображень */}
        {!error && data && (
          <>
            <Title title={t('moviesPage.trend_list')} />
            <MovieGallery movies={data} lng={lng} />
          </>
        )}

        {!error && query && <MovieGallery movies={movies} lng={lng} />}
        {/* якщо при запиті зображення знайдені, запит не в стадії очікування та ще є сторінки з зображеннями - рендериться кнопка Load More*/}
        {movies.length > 0 && !isLoading && page <= totalPages && (
          <Btn onClick={onLoadMore}>{t('moviesPage.load_more')}</Btn>
        )}
        {/* якщо запит успішний  - рендериться галерея зображень акторів*/}
        {actors && (
          <>
            <BlockInfoActors>
              <TitleList>{t('moviesPage.persons_list')}</TitleList>

              <SmallText>
                <small>{t('moviesPage.description_persons_list')}</small>
              </SmallText>
            </BlockInfoActors>

            <SectionActors>
              <BackdropActors>
                <GradientBlockTop></GradientBlockTop>

                <BgBlockActors>
                  <img src={ActorsBg} alt="poster opacity" width="1200" />
                </BgBlockActors>

                <GradientBlockBottom></GradientBlockBottom>
              </BackdropActors>
            </SectionActors>
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
                  centeredSlides={true}
                  spaceBetween={30}
                  scrollbar={{
                    hide: true,
                  }}
                  modules={[Autoplay, Scrollbar]}
                  className="mySwiper"
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                    // when window width is >= 1040px
                    1040: {
                      slidesPerView: 8,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {actors.map(({ id, profile_path, name, known_for }) => {
                    return (
                      <SwiperSlide key={id}>
                        <Link to="/" style={{ margin: `0 auto` }}>
                          <AvatarWrap>
                            <Poster
                              src={
                                profile_path
                                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                                  : `https://image.tmdb.org/t/p/w300${NoPoster}`
                              }
                              alt={name}
                            />
                          </AvatarWrap>

                          <ActorName>{name}</ActorName>
                          {known_for[0] && (
                            <>
                              <Known>{known_for[0].title}</Known>
                            </>
                          )}
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
    </>
  );
};

export default Movies;
