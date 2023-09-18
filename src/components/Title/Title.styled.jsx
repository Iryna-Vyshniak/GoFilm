import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  color: ${({ theme }) => theme.text};
  text-shadow:
    0 0.4px 0.4px #fff,
    0 0.5px 0.5px #4b1414;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
