import HeroImg from 'assets/initialState.png';

import {
  BlockHero,
  GradientBlockBottom,
  GradientBlockTop,
  Hero,
  HeroContainer,
  Wrapper
} from './InitialStateGallery.styled';

export const InitialStateGallery = () => {
  return (
    <Wrapper>
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
