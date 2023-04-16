import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin: 1vh auto;
`;

export const Text = styled.p`
  max-width: 80%;
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};

  text-align: center;
  
  font-family: ${props => props.theme.fonts.heading}
  font-size: ${props => props.theme.fontSizes.xl}
`;

export const ErrorImg = styled.img`
  width: 25vw;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin-bottom: 24px;
`;
