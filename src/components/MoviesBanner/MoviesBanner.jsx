import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rating } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Title } from 'components/Title/Title';
import { getNowPlayingMovies } from 'services/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import Error from 'assets/error.png';

import {
  BackdropContainer,
  BackdropPoster,
  Content,
  GradientBlockBottom,
  GradientBlockTop,
  ItemMovies,
  NavLink,
  Reviews
} from './MoviesBanner.styled';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  adaptiveHeight: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5500,
  cssEase: 'linear'
};

export const MoviesBanner = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const { i18n } = useTranslation();
  const lng = i18n.language;

  // get Now Playing Movies
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getNowPlayingMovies(lng);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [lng, location.search]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <img src={Error} alt="default pic for error" width="1200" />}
      {!error && movies.length > 0 && (
        <Slider {...settings}>
          {movies.map(({ id, poster_path, title, vote_average, overview }, idx) => (
            <BackdropContainer key={id} className="styles.swiperslide">
              <GradientBlockTop></GradientBlockTop>
              {`https://image.tmdb.org/t/p/original${poster_path}` && (
                <BackdropPoster>
                  <img
                    src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : Error}
                    alt={title}
                    width="1200"
                  />
                </BackdropPoster>
              )}
              <GradientBlockBottom></GradientBlockBottom>
              <ItemMovies>
                <Content>
                  <Title title={title} />
                  {(vote_average || vote_average > 0) && (
                    <Rating
                      name="read-only"
                      defaultValue={(vote_average / 10) * 5}
                      precision={0.5}
                      size="large"
                      readOnly
                    />
                  )}
                  {overview?.length > 250 ? (
                    <Reviews>{overview.slice(0, 250)}...</Reviews>
                  ) : (
                    <Reviews>{overview}</Reviews>
                  )}

                  <NavLink to={`/movies/${id}`} state={location.state}>
                    WATCH MORE
                  </NavLink>
                </Content>
              </ItemMovies>
            </BackdropContainer>
          ))}
        </Slider>
      )}
    </>
  );
};
