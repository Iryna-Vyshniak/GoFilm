import { useState } from 'react';
import i18next from 'i18next';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { MenuItem } from '@mui/material';
import { FcGlobe } from 'react-icons/fc';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { Btn, TitleLang } from './LangMenu.styled';
import { useLocalStorage } from 'hooks/useLocaleStorage';

const ITEM_HEIGHT = 32;

export const LangMenu = ({ languages, t }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useLocalStorage('index', 1);

  const open = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e, idx) => {
    setSelectedIndex(idx);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FcGlobe />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            maxHeight: ITEM_HEIGHT * 4.2,
            width: '8rem',
          },
        }}
      >
        <TitleLang>
          <span>{t('language')}</span>
        </TitleLang>
        {languages.map(({ code, name, country_code }, idx) => (
          <MenuItem
            key={country_code}
            selected={idx === selectedIndex}
            onClick={e => handleMenuItemClick(e, idx)}
          >
            <Btn
              onClick={() => {
                i18next.changeLanguage(code);
              }}
            >
              <span className={`fi fi-${country_code}`}></span>
              {name}
            </Btn>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
