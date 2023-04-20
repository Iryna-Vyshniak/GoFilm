import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';

export const NavLink = styled(MovieLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
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
    border: 1px solid black;
    border-radius: 2px;
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
