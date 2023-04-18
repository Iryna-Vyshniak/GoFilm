import styled from 'styled-components';

export const MoviesBlock = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: small;
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
