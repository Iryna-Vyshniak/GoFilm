import { func, string } from 'prop-types';
import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';
import { ToggleContainer } from './ToggleDarkLightMode.styled';

export const lightTheme = {
  body: '#fffdf5',
  text: '#000',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  gradientHeroBanner:
    'linear-gradient(180deg, rgba(55, 150, 111, 0)0%, rgba(185, 228, 201, 0) 10%, rgba(255, 253, 245, 1) 100%)',
  backgroundHeaderFooter: '#b9e4c9',
  gradientBlock: 'rgba(255, 253, 245, 0.8)',
  cardsTextColor: '#000',
  textShadow: '0 0.4px 0.4px #fff',
  buttonShadow: '-3px -3px 7px #ffffff, 3px 3px 7px rgba(185, 228, 201, 0.773)',
};

export const darkTheme = {
  body: '#19281f',
  text: '#FAFAFA',
  textFooter: '',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  gradientHeroBanner:
    'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(121,9,9,0) 10%, #19281f 100%)',

  backgroundHeaderFooter:
    'linear-gradient(180deg, rgba(55,150,111,0.2) 0%, rgba(55,150,111,0.3) 10%, #19281f 100%)',

  gradientBlock: 'none',
  cardsTextColor: '#fff',
  textShadow: '0 0.4px 0.4px #000',
  buttonShadow: '-1px -1px 1px #ffffff, 1px 1px 1px rgba(185, 228, 201, 0.773)',
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
  toggleTheme: func.isRequired,
};
