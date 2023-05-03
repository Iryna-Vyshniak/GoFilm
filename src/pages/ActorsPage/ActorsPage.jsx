import { useState, useEffect, useMemo } from 'react';
import { useRef } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { notifyOptions } from 'utils/notify';

//import { animateScroll as scroll } from 'react-scroll';
import {
  ActorList,
  ActorListItem,
  ActorsName,
  ActorsDepartment,
  ActorsRating,
  Known,
  ActorsContainer,
} from './ActorsPage.styled';

import { getActors } from 'services/themoviedbAPI';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { Loader } from 'components/Loader/Loader';
import { LinkToBack } from 'components/LinkToBack/LinkToBack';
import NoPoster from 'assets/no-poster.jpg';
import { ActorsSearch } from 'components/ActorsSearch/ActorsSearch';
import Pagination from 'components/Pagination/Pagination';

//  /actors
const ActorsPage = ({ lng }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actors, setActors] = useState([]);
  const [filteredActors, setFilteredActors] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    query: '',
  });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);
  let { query } = params;
  //console.log(params);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const dataActors = await getActors(page, query, lng);
        //console.log(dataActors);

        if (dataActors.results.length === 0) {
          toast.error("Sorry, that's all actors we found", notifyOptions);
        }
        setActors(dataActors.results);
        setTotalPages(dataActors.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, query, location.search, lng]);

  useEffect(() => {
    const filtered = actors?.filter(actor =>
      actor?.name?.toLowerCase().includes(query?.toLowerCase())
    );
    setFilteredActors(filtered);
  }, [actors, query]);

  const handleSearchChange = e => {
    query = e.target.value;
    setSearchParams({ page: 1, query: query });
    //console.log(params);
  };

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ActorsContainer>
      <LinkToBack
        to={backLinkLocationRef.current}
        children={t('moviesPage.back_to_movies')}
      />
      <ActorsSearch value={query} onChange={handleSearchChange} t={t} />
      {isLoading && <Loader />}
      {/*  якщо запит відбувся з помилкою - рендериться дефолтне зображення з
      повідомленням помилки */}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}
      {!error && actors && (
        <>
          <ActorList>
            {filteredActors.map(
              ({
                profile_path,
                name,
                known_for,
                known_for_department,
                popularity,
                id,
              }) => (
                <Link to={`/actors/${id}`} state={{ from: location }} key={id}>
                  <ActorListItem key={id}>
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/original${profile_path}`
                          : NoPoster
                      }
                      alt={name}
                      width={200}
                    />
                    <ActorsName>{name}</ActorsName>
                    <ActorsDepartment>{known_for_department}</ActorsDepartment>
                    {known_for[0] && (
                      <>
                        <Known>{known_for[0]?.title}</Known>
                      </>
                    )}
                    <ActorsRating>
                      Actors Rating: {(popularity / 5).toFixed(0)}%
                    </ActorsRating>
                  </ActorListItem>
                </Link>
              )
            )}
          </ActorList>
          <Pagination
            pageCount={totalPages}
            setSearchParams={setSearchParams}
            params={params}
            currentPage={page - 1}
          />
        </>
      )}
    </ActorsContainer>
  );
};

export default ActorsPage;
