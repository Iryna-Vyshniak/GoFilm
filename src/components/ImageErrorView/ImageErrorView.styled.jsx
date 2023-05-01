import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin: 1vh auto;
`;

export const Text = styled.p`
  max-width: 80%;
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};

  text-align: center;
  
  font-family: ${props => props.theme.fonts.heading}
  font-size: ${props => props.theme.fontSizes.s}
`;

export const Hero = styled.img`
  width: 50vw;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
`;

export const BackdropImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;
  flex: 1 0 auto;

  img {
    opacity: 0.8;
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
  height: 45vw;

  background: ${({ theme }) => theme.gradientHeroBanner};
`;

export const BlockHero = styled.div`
  position: relative;
  margin-top: -30px;
  margin-bottom: 30px;
`;
export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  width: 100%;

  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;
