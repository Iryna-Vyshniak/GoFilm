import React from 'react';
import PropTypes from 'prop-types';
import {
  BlockHero,
  GradientBlockBottom,
  GradientBlockTop,
  Hero,
  HeroContainer,
  Text,
  Wrapper,
} from './InitialStateGallery.styled';
import HeroImg from 'assets/initialState.png';

export const InitialStateGallery = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <BlockHero>
        <HeroContainer>
          <GradientBlockTop></GradientBlockTop>
          <Hero src={HeroImg} alt="Actor" width="240" />
          <GradientBlockBottom></GradientBlockBottom>
        </HeroContainer>
      </BlockHero>
    </Wrapper>
  );
};

InitialStateGallery.propTypes = {
  text: PropTypes.string.isRequired,
};
