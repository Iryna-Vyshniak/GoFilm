import styled from 'styled-components';

export const FooterBlock = styled.footer`
  position: relative;
  display: flex;
  padding: 16px 0;

  background: ${({ theme }) => theme.backgroundHeaderFooter};
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 1px rgba(0, 0, 0, 0.14),
    0px 1px 10px 1px rgba(0, 0, 0, 0.12);
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  margin: 0 auto;
  padding: 0 20px;

  width: 100%;
  max-width: 1200px;

  font-size: 12px;
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.3s;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const InfoText = styled.div`
  display: flex;

  max-width: 1000px;

  font-size: 12px;
  line-height: 20px;
  text-align: center;
  opacity: 0.5;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;
  }
`;

export const SocialIcons = styled.div`
     display: flex;
     align - items: center;
     justify - content: center;
     gap: 24px;

        svg {
            display: flex;
            align - items: center;
            justify - content: center;

            width: 20px;
            height: 20px;
            border - radius: 50%;

            background - color: rgba(255, 255, 255, 0.115);

             color: ${props => props.theme.colors.white};
   
            cursor: pointer;
            transition: all ease 0.3s;
:hover{
color: ${props => props.theme.colors.accent};
}
}`;

export const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: transparent;
  box-shadow:
    0 -1px 1px #ffffff,
    0 1px 1px rgba(185, 228, 201, 0.773);

  :hover {
    background: #ecf0f3;
    box-shadow:
      inset -3px -3px 7px #ffffff,
      inset 3px 3px 5px #ceced1;
  }
`;

export const Separator = styled.span`
  padding: 0 0 0 10px;
  color: #fff;
  font-weight: 500;
`;

export const LinkToSupport = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fd5523;
  font-weight: 500;
  :hover {
    border-radius: 4px;
    background: linear-gradient(to bottom, #005bbb 40%, #ffd500 60%);
  }
`;

export const LogoProject = styled.img`
  display: block;
  width: 100%;
  height: 32px;
`;
