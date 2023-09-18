import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper';

import Grid2 from '@mui/material/Unstable_Grid2';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { GenresSelect } from 'components/GenresSelect/GenresSelect';
import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import { MoviesBanner } from 'components/MoviesBanner/MoviesBanner';

import {
  getActorsPopular,
  getGenresMovies,
  getMoviesByQuery,
  getMoviesWithGenres
} from 'services/themoviedbAPI';
import { MovieGallery } from 'modules/MovieGallery/MovieGallery';

import NoPoster from 'assets/no-poster.jpg';
import ActorsBg from 'assets/actors-bg.png';

import {
  ActorName,
  AvatarWrap,
  BackdropActors,
  BgBlockActors,
  BlockInfoActors,
  GradientBlockBottomActors,
  GradientBlockTop,
  Known,
  MoviesBlock,
  Poster,
  SectionActors,
  SectionHero,
  SmallText,
  TitleList
} from './MoviesPage.styled';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const [data, setData] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    query: ''
  });

  const { i18n, t } = useTranslation();
  const lng = i18n.language;

  const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  const page = Number(params.page || 1);
  let { query } = params;

  const location = useLocation();

  // movies
  useEffect(() => {
    (async () => {
      try {
        setData(null);
        const data = await getMoviesByQuery(page, query, lng);
        setMovies(data.results);
        setTotalPages(data.total_results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, query, location.search, lng]);

  useEffect(() => {
    const filtered = movies?.filter(movie =>
      movie?.title?.toLowerCase().includes(query?.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, query]);

  // actors
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const dataActors = await getActorsPopular(lng);
        setActors(dataActors);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [lng]);

  // get movies by genres
  useEffect(() => {
    if (!selectedGenre) return;

    const fetchMovies = async (movieId, lng) => {
      try {
        setIsLoading(true);
        setError(null);
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
    fetchMovies(selectedGenre, lng);
  }, [lng, selectedGenre, t]);

  // get genres
  useEffect(() => {
    async function getGenres() {
      try {
        setIsLoading(true);
        setError(null);
        const genresData = await getGenresMovies(lng);
        setGenres(genresData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getGenres();
  }, [lng]);

  if (!actors) {
    return <div>{t('loading')}</div>;
  }

  const handleSearchChange = e => {
    const inputValue = e.target.value;
    query = inputValue;
    setSearchParams({ page: 1, query: query });

    // clear selected genre when input is changed
    if (selectedGenre) {
      setSelectedGenre(null);
    }
  };

  return (
    <>
      <MoviesBlock>
        <SectionHero>
          <GradientBlockTop></GradientBlockTop>
          <MoviesBanner />
        </SectionHero>
        {/* ПОШУК ФІЛЬМІВ */}
        <Searchbar value={query} onChange={handleSearchChange} />
        <GenresSelect onSelect={setSelectedGenre} genres={genres} isLoading={isLoading} />

        {isLoading && <Loader />}
        {/*  якщо запит відбувся з помилкою - рендериться дефолтне зображення з повідомленням помилки */}
        {error && <ImageErrorView message={t('moviesPage.mistake')} />}

        {/* якщо при запиті зображення не знайдені - рендериться дефолтне зображення з повідомленням */}
        {totalPages === 0 && data === null && (
          <ImageErrorView message={t('moviesPage.not_found')} />
        )}

        {!error && !isLoading && !query && selectedGenre === null && (
          <>
            <Title title={t('actorsPage.expected')} />
            <MovieGallery movies={movies} genres={genres} />
          </>
        )}

        {!error && query && !isLoading && <MovieGallery movies={filteredMovies} genres={genres} />}

        {movies.length > 0 && !isLoading && page <= totalPages && (
          <Pagination
            pageCount={totalPages}
            setSearchParams={setSearchParams}
            params={params}
            currentPage={page - 1}
          />
        )}

        {/* рендер галереї зображень за жанрами*/}
        {!error && !isLoading && data && (
          <>
            <Title title={t('moviesPage.trend_list')} />
            <MovieGallery movies={data} genres={genres} />
          </>
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

                <GradientBlockBottomActors></GradientBlockBottomActors>
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
                    hide: true
                  }}
                  modules={[Autoplay, Scrollbar]}
                  className="mySwiper"
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 0
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 6,
                      spaceBetween: 20
                    },
                    // when window width is >= 1040px
                    1040: {
                      slidesPerView: 8,
                      spaceBetween: 50
                    }
                  }}
                >
                  {actors.map(({ id, profile_path, name, known_for }) => {
                    return (
                      <SwiperSlide key={id}>
                        <Link to={`/actors/${id}`} state={{ from: location }} key={id}>
                          <AvatarWrap>
                            <Poster
                              src={
                                profile_path
                                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                                  : NoPoster
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

export default MoviesPage;
