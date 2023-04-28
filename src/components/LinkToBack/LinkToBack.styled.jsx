import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;

  width: 150px;

  border: none;
  border-radius: ${props => props.theme.radii.normal};

  font-size: 12px;
  color: ${props => props.theme.colors.accent};
  text-shadow: 0 0.4px 0.4px #fff;
  text-transform: uppercase;
  text-align: center;

  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
