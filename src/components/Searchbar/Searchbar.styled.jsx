import styled from 'styled-components';
import DebounceInput from 'react-debounce-input';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;

  width: 100%;

  max-width: 20.4rem;
  height: 2.2rem;

  backdrop-filter: blur(2px);
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 30px;

  box-shadow:
    1px 1px 1px #f84119,
    1px 1px 1px #fff;

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
  border-radius: 50%;

  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
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

export const SearchFormInput = styled(DebounceInput)`
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
  letter-spacing: 1.4px;

  :focus {
    outline: none;
  }

  ::placeholder {
    text-align: center;
    color: #fd5523;
    font-size: 20px;
    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 1.3px;
  }
`;
