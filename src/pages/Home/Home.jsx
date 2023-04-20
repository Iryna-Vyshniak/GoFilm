import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomeBlock } from './Home.styled';
import { Title } from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { getPopularMovies } from 'services/themoviedbAPI';

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
        // console.log(data);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  const handlePageClick = e => {
    //console.log(e.selected);
    setSearchParams({ page: e.selected + 1 });
  };

  return (
    <HomeBlock>
      <Title title="Trending Today" />
      {isLoading && <Loader />}
      {error && <ImageErrorView message="Oops, mistake! Please try again" />}
      {!error && (
        <>
          <MovieGallery movies={movies} />
          <Pagination handlePageClick={handlePageClick} pages={totalPages} />
        </>
      )}
    </HomeBlock>
  );
};

export default Home;
