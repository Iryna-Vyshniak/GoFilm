import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';

export const BackdropContainer = styled.section`
  position: relative;

  margin: 0 auto;
  margin-top: -80px;
  padding: 0;

  width: 100%;
  height: 550px;

  padding-left: 15px;
  padding-right: 15px;
  background-image:;
`;

export const GradientBlockTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.gradientBlock};
`;

export const BackdropPoster = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;

  flex: 1 0 auto;
  background-color: rgba(0, 0, 0, 1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const GradientBlockBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 550px;

  background: ${({ theme }) => theme.gradientHeroBanner};
`;

export const ItemMovies = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  height: 550px;
  overflow: hidden;
  background: color: ${({ theme }) => theme.body};
  cursor: pointer;

  @media screen and (min-width: 768px) {
     gap: 10px;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 25;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  padding: 8px;
  width: 100%;
  backdrop-filter: blur(10.5px);
  border-radius: 8px;
  border: none: outline: none;

  @media screen and (min-width: 768px) {
    gap: 20px;
    width: 35%;
  }
`;

export const Reviews = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.5px;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
`;

export const NavLink = styled(MovieLink)`
  position: relative;
  z-index: 9;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 40px;
  border-radius: 74px;

  text-decoration: none;
  color: ${({ theme }) => theme.text};
  text-shadow:
    0 0.4px 0.4px #fff,
    inset 40px 40px 40px #fff;
  font-size: 12px;
  font-weight: 500;
  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);

  &.active {
    color: #fff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.text};
  }

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
`;
