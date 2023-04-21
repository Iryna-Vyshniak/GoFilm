import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  Btn,
  ContentWrapper,
  FooterBlock,
  InfoText,
  MenuItem,
  MenuItems,
  Separator,
  SocialIcons,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBlock>
      <ContentWrapper>
        <MenuItems>
          <MenuItem>
            About <Separator>|</Separator>
          </MenuItem>
          <MenuItem>
            Blog <Separator>|</Separator>
          </MenuItem>
          <MenuItem>
            Terms Of Use <Separator>|</Separator>
          </MenuItem>
          <MenuItem>
            Privacy-Policy <Separator>|</Separator>
          </MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuItems>
        <InfoText>
          GoFilm - the best choice to figure out all one about movie which you
          interested in and latest news from the world of cinema
        </InfoText>
        <SocialIcons>
          <Btn href="/">
            <FaFacebookF size="16px" fill="#4267B2" />
          </Btn>
          <Btn href="/">
            <FaInstagram size="16px" fill="#E1306C" />
          </Btn>
          <Btn href="/">
            <FaTwitter size="16px" fill="#1DA1F2" />
          </Btn>
          <Btn href="/">
            <FaLinkedinIn size="16px" fill="#4267B2" />
          </Btn>
        </SocialIcons>
      </ContentWrapper>
    </FooterBlock>
  );
};

export default Footer;
