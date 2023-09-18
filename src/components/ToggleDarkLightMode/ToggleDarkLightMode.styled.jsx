import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  padding: 0.5rem;

  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 8px;
  cursor: pointer;

  font-size: 0.5rem;
  width: 4rem;
  height: 2.2rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 300ms linear;

    /* перевіряємо, чи є svg активним, і якщо так - переміщуємо відповідну піктограму з видимої області - подібно до того, як місяць йде, коли день, і навпаки */

    /*  sun icon */

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    /* moon icon */

    &:last-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;
