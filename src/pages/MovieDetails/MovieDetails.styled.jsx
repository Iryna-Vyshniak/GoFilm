import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';

export const NavLink = styled(MovieLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  text-shadow: 0 0.4px 0.4px #fff;
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
  gap: 26px;

  padding: 16px;
  font-weight: 500;

  h1,
  h2 {
    color: #fd5523;
  }
  img {
    border-radius: 2px;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const MovieList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
`;

export const MovieInfo = styled.div`
  height: auto;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const MovieInfoTitle = styled.h4`
  margin-bottom: 30px;
  color: orangered;
`;

export const PlayBox = styled.div`
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
  font-weight: 700;
`;
