import styled from 'styled-components';

export const ActorMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const MovieListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({ theme }) => theme.space[3]}px;

  max-width: 100%;
  width: 260px;
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

  img {
    display: block;
    min-height: 100%;
    height: 420px;
    width: 100%;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: transform 250ms linear;
    transform: scale(1);

    object-fit: cover;
    object-position: center;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
