import styled from 'styled-components';

export const HomeBlock = styled.div`
  // padding-top: ${({ theme }) => theme.space[5]}px;
  // padding-bottom: ${({ theme }) => theme.space[5]}px;

  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
