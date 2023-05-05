import styled from 'styled-components';

export const HomeBlock = styled.div`
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
