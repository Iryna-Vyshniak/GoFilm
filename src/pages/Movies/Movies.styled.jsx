import styled from 'styled-components';

export const MoviesBlock = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
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
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(0.8);
  }
`;

export const Poster = styled.img`
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

//--------------------------------------------------
export const BackdropImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  overflow: hidden;

  flex: 1 1 auto;

  img {
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

  margin-top: -50px;
  margin-bottom: 30px;

  padding-top: 84px;
  padding-bottom: 84px;

  background-color: rgba(0, 0, 0, 1);
`;
export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 0;

  width: 100%;
  height: 450px;

  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;
