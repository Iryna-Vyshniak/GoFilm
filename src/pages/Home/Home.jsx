import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeBlock,
  MovieListItem,
  MovieListStyled,
  MoviePoster,
  MovieTitle,
  ReleaseDate,
  Vote,
} from './Home.styled';
import { Title } from 'components/Title/Title';
import { getPopularMovies } from 'services/themoviedbAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  //   const [totalResult, setTotalResult] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPopularMovies(page);
        console.log(data);
        setMovies(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [page]);

  return (
    <HomeBlock>
      <Title title="Trending Today" />
      {movies?.results && (
        <MovieListStyled>
          {movies.results.map(movie => (
            <MovieListItem key={movie.id}>
              <Link to={`/trending/movie/day`}>
                <MoviePoster>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`
                    }
                    alt={movie.title}
                    width="200"
                  />
                </MoviePoster>
                <MovieTitle>{movie.title}</MovieTitle>
                <ReleaseDate>
                  {parseInt(movie.release_date || movie.first_air_date)}
                </ReleaseDate>
                {movie.vote_average !== 0 && (
                  <Vote>{movie.vote_average.toFixed(1)}</Vote>
                )}
              </Link>
            </MovieListItem>
          ))}
        </MovieListStyled>
      )}
    </HomeBlock>
  );
};

export default Home;
