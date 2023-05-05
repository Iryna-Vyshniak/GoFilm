import styled from 'styled-components';

export const BackdropImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  flex: 1 0 auto;
  //   flex-grow: 1;
  //   flex-shrink: 1;
  //   flex-basis: auto;

  width: 100%;
  height: 100%;

  overflow: hidden;

  img {
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const GradientBlockTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.gradientBlock};
`;

export const GradientBlockBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 450px;

  background: ${({ theme }) => theme.gradientHeroBanner};
`;

export const SectionHero = styled.section`
  position: relative;
  margin-top: -70px;
  margin-bottom: 30px;
  padding-top: 84px;
  padding-bottom: 84px;
  background-color: rgba(0, 0, 0, 1);

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;
export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 0;

  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 450px;
`;
