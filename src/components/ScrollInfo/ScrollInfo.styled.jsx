import styled from 'styled-components';

export const BtnReadMore = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  color: ${props => props.theme.colors.accent};
  text-shadow:
    0 0.4px 0.4px #fff,
    inset 40px 40px 40px #fff;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 500;
  opacity: 0.5;

  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 1;
    color: #fff;
    background-color: #fd5523;
  }
`;
