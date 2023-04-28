import styled from 'styled-components';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  margin-bottom: 16px;

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
  text-transform: uppercase;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: -70px;

  width: 100%;

  max-width: 20.4rem;
  height: 2.2rem;

  backdrop-filter: blur(2px);
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 30px;

  box-shadow: 1px 1px 1px #f3d8a0, 1px 1px 1px #fff;

  overflow: hidden;
`;

export const Icon = styled(HiMagnifyingGlass)`
  position: absolute;
  right: -5px;
  margin-right: 10px;
  width: 20px;
  height: 20px;

  fill: ${props => props.theme.colors.accent};
  stroke: ${props => props.theme.colors.white};
  stroke-width: 1px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.2);
  }
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

  border-radius: 0.1rem;

  font: inherit;

  font-size: 1.2rem;

  border: none;
  outline: none;

  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[3]}px;

  background: none;

  color: ${props => props.theme.colors.accent};
  text-shadow: 0 0.4px 0.4px #fff;
  letter-spacing: 1.4px;

  ::placeholder {
    text-align: center;
    color: #37966f;
    font-size: 20px;
    font-family: ${props => props.theme.fonts.heading};
    text-shadow: 0 0.4px 0.4px #000;
    letter-spacing: 1.3px;
  }
`;
