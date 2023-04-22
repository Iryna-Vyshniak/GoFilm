import { func, string } from 'prop-types';
import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';
import { ToggleContainer } from './ToggleDarkLightMode.styled';

export const lightTheme = {
  body: '#FFFBE6',
  text: '#000',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  body: '#19281f',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export const ToggleDarkLightMode = ({ theme, toggleTheme }) => {
  //const isLight = theme === 'light';

  return (
    <ToggleContainer onClick={toggleTheme}>
      <MoonIcon />
      <SunIcon />
    </ToggleContainer>
  );
};

ToggleDarkLightMode.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
