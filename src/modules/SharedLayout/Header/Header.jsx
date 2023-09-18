import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, IconButton, Drawer, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { green } from '@mui/material/colors';

import Logotype from 'assets/logo.png';
import { LangMenu } from 'components/LangMenu/LangMenu';
import { ToggleDarkLightMode } from 'components/ToggleDarkLightMode/ToggleDarkLightMode';

import { AppBar, LangThemeBlock, Link, Logo, LogoText, Nav, NavBlock } from './Header.styled';

const primary = green[200];

export const Header = ({ theme = 'light', toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { t } = useTranslation();

  const mobileMenu = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }}>
        <Logo to="/">
          <img src={Logotype} alt="logo" width="60px" />
          <span>GoFilm</span>
        </Logo>
      </Typography>
      <Divider />
      <Nav>
        <Link to="/">{t('home_link')}</Link>
        <Link to="/movies">{t('movie_link')}</Link>
        <Link to="/actors">{t('actor_link')}</Link>
      </Nav>
    </Box>
  );
  return (
    <Box component={'header'} sx={{ position: 'relative', height: '44px' }}>
      <AppBar component={'nav'} sx={{ bgcolor: '#B9E4C9', position: 'relative' }} elevation={6}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: 'none' }
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ my: 2 }}>
            <Logo to="/">
              <img src={Logotype} alt="logo" width="60px" />
              <LogoText>GoFilm</LogoText>
            </Logo>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavBlock>
              <Link to="/">{t('home_link')}</Link>
              <Link to="/movies">{t('movie_link')}</Link>
              <Link to="/actors">{t('actor_link')}</Link>
            </NavBlock>
          </Box>
          <LangThemeBlock>
            <LangMenu t={t} />
            <ToggleDarkLightMode theme={theme} toggleTheme={() => toggleTheme()} />
          </LangThemeBlock>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '280px',
              backgroundColor: primary
            }
          }}
        >
          {mobileMenu}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};
