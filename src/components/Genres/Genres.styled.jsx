import styled from 'styled-components';

export const GenresBlock = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Genre = styled.li`
  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  color: rgb(0, 0, 0);
  text-shadow: 0 0.4px 0.4px #fff;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: bold;
  border-radius: 5px;
  padding: 0 6px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;
