import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 100%;
  max-width: 400px;

  background-color: rgba(185, 228, 201, 0.4);
  backdrop-filter: blur(2px);
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 30px;

  box-shadow: 1px 1px 6px #f3d8a0, 1px 1px 6px #fff;

  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 30px 0 0 30px;

  opacity: 0.6;
  background-color: rgba(185, 228, 201, 1);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }

  svg {
    fill: ${props => props.theme.colors.accent};
    stroke: ${props => props.theme.colors.white};
    stroke-width: 1px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.2);
    }
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  min-height: 34px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;

  background-color: transparent;
  color: ${props => props.theme.colors.accent};
  text-shadow: 0 0.4px 0.4px #fff;

  ::placeholder {
    color: #ffffff;
    font-size: 20px;
    font-family: ${props => props.theme.fonts.heading};
    text-shadow: 0 0.4px 0.4px #fd5523;
    letter-spacing: 1.3px;
  }
`;
