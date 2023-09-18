import styled from 'styled-components';

export const MoviesBlock = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-bottom: ${({ theme }) => theme.space[5]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  margin-bottom: 64px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;

  border: none;
  border-radius: ${props => props.theme.radii.normal};

  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};

  background-color: ${props => props.theme.colors.secondary};
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(0.8);
  }
`;

export const AvatarWrap = styled.div`
  display: inline-block;
  margin-bottom: 15px;

  width: 125px;
  height: 125px;
  border-radius: 50%;

  overflow: hidden;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

//--------------------------------------------------
export const BackdropImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  flex: 1 1 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    opacity: 0.5;
  }
`;
export const BgBlockActors = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;

  flex: 1 1 auto;

  img {
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const BackdropActors = styled.div`
  padding-top: 84px;
  padding-bottom: 84px;
  width: 100%;
  height: 100px;
`;

export const GradientBlockTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.gradientBlock};
`;

export const SectionHero = styled.section`
  position: relative;

  margin-top: -50px;
  margin-bottom: 30px;

  padding-top: 84px;
  padding-bottom: 84px;
`;

export const SectionActors = styled.section`
  position: relative;

  margin-bottom: -180px;
  margin-top: 30px;

  padding-top: 84px;
`;
export const BlockInfoActors = styled.div`
  position: relative;
  z-index: 50;
  margin-bottom: -110px;
  margin-top: 30px;

  padding-top: 84px;
`;
export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 0;

  width: 100%;
  height: 750px;

  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const ActorName = styled.p`
  color: ${({ theme }) => theme.cardsTextColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  text-align: center;

  font-size: ${props => props.theme.fontSizes.xs};
`;
export const Known = styled.p`
  color: ${({ theme }) => theme.cardsTextColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  text-align: center;

  font-size: ${props => props.theme.fontSizes.xs};
  opacity: 0.5;
`;

export const TitleList = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;

  width: 100%;
  height: 4rem;

  backdrop-filter: blur(0.7125rem);

  text-align: center;
  color: ${({ theme }) => theme.text};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const SmallText = styled.p`
  position: relative;
  color: ${({ theme }) => theme.cardsTextColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  text-align: center;

  font-size: ${props => props.theme.fontSizes.s};
  font-style: italic;
  opacity: 0.5;
`;

export const GradientBlockBottomActors = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 350px;

  background: ${({ theme }) => theme.gradientHeroBanner};
`;
