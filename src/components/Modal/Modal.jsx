import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onModalClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === `Escape`) {
        onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onModalClose]);

  const handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  //window.removeEventListener('keydown', handleBackdropeClick);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropeClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onModalClose: PropTypes.func,
};
