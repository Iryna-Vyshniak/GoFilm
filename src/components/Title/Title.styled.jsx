import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 700;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
