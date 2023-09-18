import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 14px;

  .selected {
    border: 1px solid #ffffff;
    border-radius: 50%;
    background: #ecf0f3;
    box-shadow:
      inset -3px -3px 7px #ffffff,
      inset 3px 3px 5px #ceced1;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
    color: ${props => props.theme.colors.accent};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2px;

    width: 34px;
    height: 34px;
    border-radius: 50%;
    text-align: center;

    border: none;
    outline: none;

    box-shadow: ${({ theme }) => theme.buttonShadow};

    text-shadow: 0 1px 1px #fff;
    background-color: transparent;

    cursor: pointer;

    &:hover {
      background: #ecf0f3;
      box-shadow:
        inset -3px -3px 7px #ffffff,
        inset 3px 3px 5px #ceced1;
      color: ${props => props.theme.colors.accent};
    }
  }
`;
