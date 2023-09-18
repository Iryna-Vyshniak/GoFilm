import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';

export const NavLink = styled(MovieLink)`
  position: relative;
  z-index: 9;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  text-shadow:
    0 0.4px 0.4px #fff,
    inset 40px 40px 40px #fff;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 500;

  &.active {
    color: #fff;
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fd5523;
  }
`;

export const ActorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-bottom: 20px;
  padding-top: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  font-weight: 500;
`;

export const ActorContainer = styled.div`
  padding-top: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;

export const ActorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-bottom: 20px;
  padding: 0 16px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ActorInfoMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
`;

export const ActorAvatar = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

export const ActorsDetalis = styled.div`
  padding: 10px;
`;

export const ActorsInfoName = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 500;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const ActorsInfoBirth = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  & > span {
    margin-right: 5px;
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`;

export const ActorsInfoDepartment = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  & > span {
    margin-right: 5px;
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`;

export const ActorsPlaceOfBirth = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  & > span {
    margin-right: 5px;
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`;

export const ActorsPopularity = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  & > span {
    margin-right: 5px;
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`;

export const Biography = styled.p`
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;

  height: auto;
  margin-top: 30px;
  padding: 20px;
  border-bottom: 1px solid black;
`;

export const MovieInfoTitle = styled.h3`
 color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 500;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
`;
