import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { BtnReadMore } from './ScrollInfo.styled';

export default function ScrollInfo({ bio }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const { t } = useTranslation();

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <BtnReadMore onClick={handleClickOpen('body')}>{t('actorsPage.read_more')}</BtnReadMore>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{t('actorsPage.biography')}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {bio}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> {t('actorsPage.cancel')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
