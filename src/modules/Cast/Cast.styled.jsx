import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;
  text-align: center;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  max-width: 100%;
  width: 180px;
  height: 100%;

  border-radius: 8px;
  border: none;
  outline: none;

  box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);
  -webkit-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);
  -moz-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);

  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
`;

export const CastPhotoThumb = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const CastPhoto = styled.img`
  display: block;
  min-height: 100%;
  height: 240px;
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
`;

export const Wrap = styled.div`
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  padding: 4px;
`;

export const MovieHero = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const ActorsName = styled.h3`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const ActorsCharacter = styled.p`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
