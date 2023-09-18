import { useState, useEffect, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getActorDetailInfo } from 'services/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { LinkToBack } from 'components/LinkToBack/LinkToBack';
import { Title } from 'components/Title/Title';
import NoPoster from 'assets/no-poster.jpg';
import ScrollInfo from 'components/ScrollInfo/ScrollInfo';

import {
  ActorInfoMain,
  ActorsDetalis,
  ActorsInfoName,
  Biography,
  ActorsInfoBirth,
  ActorsInfoDepartment,
  ActorsPlaceOfBirth,
  ActorsPopularity,
  ActorAvatar,
  ActorInfoContainer,
  MovieInfo,
  ActorInfoWrapper,
  MovieInfoTitle,
  ActorContainer,
  NavLink
} from './ActorDetailsPage.styled';

const ActorDetailsInfoPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/actors');
  const { personId } = useParams();

  const [actorsData, setActorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const { i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getActorDetailInfo(personId, lng);
        setActorsData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [personId, lng]);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <ImageErrorView message={t('moviesPage.mistake')} />}
      {!error && (
        <ActorContainer>
          <LinkToBack to={backLinkLocationRef.current}>{t('moviesPage.back_to_movies')}</LinkToBack>
          <Title title={t('actorsPage.bio')} />

          {actorsData && (
            <ActorInfoContainer key={actorsData.id}>
              <ActorInfoWrapper>
                <ActorAvatar
                  src={
                    actorsData.profile_path
                      ? `https://image.tmdb.org/t/p/original${actorsData.profile_path}`
                      : NoPoster
                  }
                  alt={actorsData.name}
                  width={470}
                />
                <ActorInfoMain>
                  {actorsData.name && <ActorsInfoName>{actorsData.name}</ActorsInfoName>}
                  {actorsData.known_for_department && (
                    <ActorsInfoDepartment>{actorsData.known_for_department}</ActorsInfoDepartment>
                  )}
                  {actorsData.birthday && (
                    <ActorsInfoBirth>
                      <span>{t('actorsPage.date_of_birth')}</span>
                      {actorsData.birthday}
                    </ActorsInfoBirth>
                  )}
                  {actorsData.place_of_birth && (
                    <ActorsPlaceOfBirth>
                      <span>{t('actorsPage.place_of_birth')}</span>
                      {actorsData.place_of_birth}
                    </ActorsPlaceOfBirth>
                  )}
                  {actorsData.popularity && (
                    <ActorsPopularity>
                      <span>{t('actorsPage.popularity')}</span>
                      {actorsData.popularity?.toFixed(1)}
                    </ActorsPopularity>
                  )}

                  {actorsData.biography?.length > 0 && (
                    <ActorsDetalis>
                      <Biography>
                        {actorsData?.biography?.length > 500 ? (
                          <ScrollInfo bio={actorsData?.biography} />
                        ) : (
                          actorsData.biography
                        )}
                      </Biography>
                    </ActorsDetalis>
                  )}
                </ActorInfoMain>
              </ActorInfoWrapper>
              <MovieInfo>
                <MovieInfoTitle>{t('moviesPage.additional_information')}</MovieInfoTitle>
                <nav>
                  <NavLink to="actors-movies" state={{ from: location }}>
                    {t('movie_link')}
                  </NavLink>
                </nav>
              </MovieInfo>
              <Suspense fallback={<div> {t('loading')}</div>}>
                <Outlet />
              </Suspense>
            </ActorInfoContainer>
          )}
        </ActorContainer>
      )}
    </>
  );
};

export default ActorDetailsInfoPage;
