import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';
import { RatingProgressbar as Vote } from 'components/RatingProgressbar/RatingProgressbar';

export const BackdropImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  overflow: hidden;

  -webkit-box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75), -20px 20px 65px #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const NavLink = styled(MovieLink)`
  position: relative;
  z-index: 9;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  text-shadow: 0 0.4px 0.4px #fff, inset 40px 40px 40px #fff;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 500;

  &.active {
    color: #fff;
    background-color: #fd5523;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fd5523;
  }
`;

export const WrapperMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 16px;
  font-weight: 500;

  h1,
  h2 {
    color: #fd5523;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;
export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 16px;
  font-weight: 500;
`;

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 500;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const MovieList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;

  height: auto;
  margin-top: 30px;
  padding: 20px;
  border-bottom: 1px solid black;

  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(121, 9, 9, 0) 10%,
    rgb(134, 167, 147) 100%
  );
`;

export const MovieInfoTitle = styled.h4`
  margin-bottom: 30px;
  color: orangered;
`;

export const PlayVideoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 70px;
  cursor: pointer;
`;

export const Btn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AccentText = styled.span`
  color: #fd5523;
  font-weight: 700;
`;

export const RatingProgressbar = styled(Vote)`
  position: absolute;
  bottom: 0;
  width: 44px;
  height: 44px;
`;
export const ProductionLogo = styled.img`
  width: 15vw;
  height: auto;
`;
export const PosterMovie = styled.img`
  width: 50vw;
  height: auto;
`;
export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Genre = styled.li`
  background-color: #b9e4c9;
  color: #fd5523;
  text-shadow: 0 0.4px 0.4px #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 2px 8px;
`;

export const WrapRelease = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
