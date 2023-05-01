import React from 'react';
import PropTypes from 'prop-types';
import {
  BackdropImg,
  GradientBlockBottom,
  GradientBlockTop,
  HeroContainer,
  SectionHero,
} from './HeroBanner.styled';
import HeroPoster from 'assets/heroBanner.jpg';

export const HeroBanner = ({ movies }) => {
  const poster_path = movies[Math.floor(Math.random() * 20)]?.poster_path;
  // const {poster_path} = movies[Math.floor(Math.random() * 20)];
  return (
    <>
      <SectionHero>
        <HeroContainer>
          <GradientBlockTop></GradientBlockTop>
          {/*  <BackdropImg>
            <img src={HeroPoster} alt="poster opacity" width="1200" />
          </BackdropImg> */}
          {poster_path ? (
            <BackdropImg>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster opacity"
                width="1200"
              />
            </BackdropImg>
          ) : (
            <BackdropImg>
              <img src={HeroPoster} alt="poster opacity" width="1200" />
            </BackdropImg>
          )}
          <GradientBlockBottom></GradientBlockBottom>
        </HeroContainer>
      </SectionHero>
    </>
  );
};

HeroBanner.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
