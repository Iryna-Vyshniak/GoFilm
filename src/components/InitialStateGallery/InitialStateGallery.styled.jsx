import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  place-content: center;

  margin: 1vh auto;
  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;

export const Text = styled.p`
  margin: 0 auto;
  margin-bottom: 32px;
  max-width: 80%;
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};

  text-align: center;
  
  font-family: ${props => props.theme.fonts.heading}
  font-size: ${props => props.theme.fontSizes.xl}
`;

export const Hero = styled.img`
  width: 25vw;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;
`;
