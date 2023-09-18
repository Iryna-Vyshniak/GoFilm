import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import Save from 'assets/save@2x.png';
import Action from 'assets/action@2x.png';
import Hope from 'assets/hope@2x.png';
import World from 'assets/world@2x.png';

import {
  Btn,
  ContentWrapper,
  FooterBlock,
  InfoText,
  LinkToSupport,
  MenuItem,
  MenuItems,
  Separator,
  SocialIcons
} from './Footer.styled';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterBlock>
      <ContentWrapper>
        <MenuItems>
          <MenuItem>
            <LinkToSupport
              href="https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"
              aria-label="support ukrainian children"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={Save} alt="Project Save the Children" width="100" />
              Save the Children
            </LinkToSupport>
            <Separator>|</Separator>
          </MenuItem>
          <MenuItem>
            <LinkToSupport
              href="https://www.wvi.org/emergencies/ukraine"
              aria-label="support ukrainians"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={World} alt="Project World Vision" width="80" />
              World Vision
            </LinkToSupport>
            <Separator>|</Separator>
          </MenuItem>
          <MenuItem>
            <LinkToSupport
              href="https://www.projecthope.org/country/ukraine/"
              aria-label="support ukrainians"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={Hope} alt="Project HOPE" width="80" />
              Project HOPE
            </LinkToSupport>
            <Separator>|</Separator>
          </MenuItem>
          <MenuItem>
            <LinkToSupport
              href="https://www.actionagainsthunger.org/location/europe/ukraine/"
              aria-label="support ukrainians"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={Action} alt="Action Against Hunger" width="80" />
              Action Against Hunger
            </LinkToSupport>
          </MenuItem>
        </MenuItems>
        <InfoText>{t('homePage.footer_slogan')}</InfoText>
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
