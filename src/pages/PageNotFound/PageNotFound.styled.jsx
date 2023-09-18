import styled from 'styled-components';

export const PageNf = styled.div`
  text-align: center;
  color: red;
  height: 700px;
  padding-top: 200px;
  font-weight: 700;
  text-shadow:
    0 1px 1px #fff,
    1px 1px 1px #4b1414;

  h1 {
    margin-bottom: ${props => props.theme.space[4]}px;
    text-align: center;
    color: ${props => props.theme.colors.accent};

    font-size: 44px;
    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 1.5px;

    @media screen and (min-width: 480px) {
      font-size: 150px;
    }
  }
  p {
    font-size: 24px;
    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 1.5px;
    text-transform: uppercase;

    @media screen and (min-width: 480px) {
      font-size: 54px;
      font-family: ${props => props.theme.fonts.heading};
      letter-spacing: 1.5px;
    }
  }
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
