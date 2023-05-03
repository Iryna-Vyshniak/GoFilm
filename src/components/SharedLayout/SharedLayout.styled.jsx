import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  width: 1200px;
  margin: 0 auto;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  margin-bottom: 16px;

  width: 100%;

  background: ${({ theme }) => theme.backgroundHeaderFooter};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);

  > nav {
    display: flex;
  }
`;

export const Logo = styled(NavLink)`
  margin: 0;
  color: #fff;
  text-shadow: 0 1px 1px #fd5523, 0 0.7px 0.7px #000, 0 -0.3px 0.3px #4b1414;
  font-size: 18px;
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: 700;

  svg {
    fill: ${props => props.theme.colors.accent};
    stroke: ${props => props.theme.colors.white};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    margin-right: 10px;
    :hover {
      transform: scale(1.2);
    }
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
    background-color: #fd5523;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
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
