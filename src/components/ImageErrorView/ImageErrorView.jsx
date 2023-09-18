import HeroImg from 'assets/error.png';

import PropTypes from 'prop-types';

import {
  BlockHero,
  GradientBlockBottom,
  GradientBlockTop,
  Hero,
  HeroContainer,
  Text,
  Wrapper
} from './ImageErrorView.styled';

export default function ImageErrorView({ message }) {
  return (
    <Wrapper role="alert">
      <Text>{message}</Text>
      <BlockHero>
        <HeroContainer>
          <GradientBlockTop></GradientBlockTop>
          <Hero src={HeroImg} alt="Actor" width="240" />
          <GradientBlockBottom></GradientBlockBottom>
        </HeroContainer>
      </BlockHero>
    </Wrapper>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string
};
