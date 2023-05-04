import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MoviePoster = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h4`
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.cardsTextColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  text-align: center;

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 700;
`;

export const CircleRating = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  text-shadow: 0 0.3px 0.3px #000;
  border-radius: 50%;
  padding: 4px;
`;

export const GenresBlock = styled.div`
  position: absolute;
  bottom: 78px;
  right: 10px;
`;
