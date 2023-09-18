import styled from 'styled-components';

export const ActorsContainer = styled.div`
  padding-top: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ActorListItem = styled.li`
  padding: ${({ theme }) => theme.space[3]}px;
  max-width: 100%;
  width: 220px;
  height: 100%;

  border: none;
  transform: scale(1);
  border-radius: 8px;

  background-color: transparent;

  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }
`;

export const ActorsName = styled.p`
  max-width: 200px;
  color: ${({ theme }) => theme.cardsTextColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 700;
`;

export const ActorsDepartment = styled.p`
  color: ${({ theme }) => theme.cardsTextColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`;

export const ActorsRating = styled.p`
  color: green;
`;

export const Known = styled.p`
  color: ${({ theme }) => theme.cardsTextColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  text-align: center;

  font-size: ${props => props.theme.fontSizes.xs};
  opacity: 0.5;
`;
