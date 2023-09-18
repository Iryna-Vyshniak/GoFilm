import { func, string } from 'prop-types';
import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';

import { ToggleContainer } from './ToggleDarkLightMode.styled';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#FFF, #79D7ED)',
  gradientHeroBanner:
    'linear-gradient(180deg, rgba(55, 150, 111, 0)0%, rgba(185, 228, 201, 0) 10%, rgba(255, 255, 255, 1) 100%)',
  backgroundHeaderFooter: '#b9e4c9',
  gradientBlock: 'rgba(255, 255, 255, 0.8)',
  cardsTextColor: '#000',
  textShadow: '0 0.4px 0.4px #FFF',
  buttonShadow: '-3px -3px 7px #FFF, 3px 3px 7px rgba(185, 228, 201, 0.773)'
};

export const darkTheme = {
  body: 'rgba(3, 4, 3, 1)',
  text: '#FAFAFA',
  textFooter: '',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  gradientHeroBanner:
    'linear-gradient(180deg, rgba(55,150,111, 0) 0%, rgba(27,56,45, 0.2) 20%, rgba(3,4,3,1) 100%)',

  backgroundHeaderFooter:
    'linear-gradient(180deg, rgba(185,228,201,1) 0%, rgba(121,186,144,0.9996790952709209) 34%, rgba(14,41,8,1) 100%)',

  gradientBlock: 'none',
  cardsTextColor: '#FFF',
  textShadow: '0 0.4px 0.4px #000',
  buttonShadow: '-1px -1px 1px #FFF, 1px 1px 1px rgba(185, 228, 201, 0.773)'
};

export const ToggleDarkLightMode = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

ToggleDarkLightMode.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};
