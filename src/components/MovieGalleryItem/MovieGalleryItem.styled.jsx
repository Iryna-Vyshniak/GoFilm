import styled from 'styled-components';

export const ListItem = styled.li`
  border-radius: 16px;
  border: 2px solid rgba(185, 228, 201, 0.5);
  overflow: hidden;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.01);
    cursor: zoom-in;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: auto;
  height: 380px;
  object-fit: cover;
  object-position: center;
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;

  width: 100%;
  
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};
  background-color: rgba(185, 228, 201, 0.5);
  box-shadow: 0px -2px 4px 1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(5.5px);

  font-family: ${props => props.theme.fonts.heading}
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
`;

export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
