import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 100%;
  max-width: 400px;

  box-shadow: inset 1px 1px 6px #f3d8a0, inset -1px -1px 6px #fdbc9c,
    1px 1px 6px #fff;

  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }

  svg {
    fill: ${props => props.theme.colors.accent};
    stroke: ${props => props.theme.colors.white};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.2);
    }
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;

  background-color: transparent;
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};

  ::placeholder {
    color: ${props => props.theme.colors.accent};
    text-shadow: ${props => props.theme.shadows.textShadow};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: 18px;
  }
`;
