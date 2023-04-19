import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  ContentWrapper,
  FooterBlock,
  InfoText,
  MenuItem,
  MenuItems,
  SocialIcons,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBlock>
      <ContentWrapper>
        <MenuItems>
          <MenuItem>Terms Of Use</MenuItem>
          <MenuItem>Privacy-Policy</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuItems>
        <InfoText>
          GoFilm - the best choice to figure out all one about movie which you
          interested in and latest news from the world of cinema
        </InfoText>
        <SocialIcons>
          <FaFacebookF size="16px" />
          <FaInstagram size="16px" />
          <FaTwitter size="16px" />
          <FaLinkedin size="16px" />
        </SocialIcons>
      </ContentWrapper>
    </FooterBlock>
  );
};

export default Footer;
