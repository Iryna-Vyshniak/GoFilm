import React, { useEffect, useState } from 'react';

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
import { Link, useSearchParams } from 'react-router-dom';
import { InitialStateGallery } from 'components/InitialStateGallery/InitialStateGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getActorsPopular, getMoviesByQuery } from 'services/themoviedbAPI';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

import { Autoplay, Scrollbar } from 'swiper';

import Grid2 from '@mui/material/Unstable_Grid2';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import NoPoster from 'assets/no-poster.jpg';
import HeroPoster from 'assets/hero-poster.jpeg';
import ActorsBg from 'assets/actors-bg.png';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [page, setPage] = useState(1);
  const [total_results, setTotalResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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

        const data = await getActorsPopular();
        //console.log(data);
        setActors(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (!actors) {
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
    <>
      {/* <HeroHomePage movies={movies} /> */}
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
        <Searchbar onSubmit={updateQueryString} />
        {/* стартове дефолтне зображення в галереї до рендеру фільмів */}
        {isLoading && <Loader />}
        {error && <ImageErrorView message="Oops, mistake! Please try again" />}
        {!query && <InitialStateGallery text="Let`s find movies together!" />}
        {query && <MovieGallery movies={movies} />}
        {total_results / 20 >= page && (
          <Btn onClick={onLoadMore}>Load More</Btn>
        )}
        {!error && actors.length !== 0 && (
          <>
            <BlockInfoActors>
              <TitleList>List of popular persons</TitleList>

              <SmallText>
                <small>This list updates daily</small>
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
                        <Link to={`/movies}`} style={{ margin: `0 auto` }}>
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
