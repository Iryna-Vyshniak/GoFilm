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
  SocialIcons,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBlock>
      <ContentWrapper>
        <MenuItems>
          <MenuItem>About</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Terms Of Use</MenuItem>
          <MenuItem>Privacy-Policy</MenuItem>
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
