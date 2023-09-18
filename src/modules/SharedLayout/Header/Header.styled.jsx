import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar as HeaderBlock } from '@mui/material';

export const AppBar = styled(HeaderBlock)`
  position: fixed;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  margin-bottom: 30px;

  background: ${({ theme }) => theme.backgroundHeaderFooter};
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: #fff;
  text-shadow:
    0 1px 1px #fd5523,
    0 0.7px 0.7px #000,
    0 -0.3px 0.3px #4b1414;
  font-size: 18px;
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: 700;
`;
export const LogoText = styled.span`
  display: none;
  @media only screen and (min-width: 480px) {
    display: inline-block;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: ${props => props.theme.fontSizes.s};

  font-weight: 500;

  &.active {
    color: white;
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  }
`;
export const LangThemeBlock = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media only screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
`;

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
