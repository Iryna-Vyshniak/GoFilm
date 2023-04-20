import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;
  font-size: 14px;

  .selected {
    border: 1px solid #ffffff;
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
    color: ${props => props.theme.colors.accent};
  }

  a {
    display: inline-block;
    padding: 3px 0 2px 0;
    vertical-align: middle;
    width: 38px;
    height: 32px;
    text-align: center;

    border-radius: 4px;
    border: none;
    outline: none;

    box-shadow: -3px -3px 7px #ffffff, 3px 3px 7px rgba(185, 228, 201, 0.773);

    text-shadow: 0 1px 1px #fff;
    background-color: transparent;

    cursor: pointer;

    &:hover {
      background: #ecf0f3;
      box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
      color: ${props => props.theme.colors.accent};
    }
  }
`;
