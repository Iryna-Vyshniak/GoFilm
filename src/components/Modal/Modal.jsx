import Modal from 'react-modal';
import React from 'react';
import { CloseBtn } from './Modal.styled';
import ReactPlayer from 'react-player/youtube';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: 'calc(100vw / 16 * 9)',
    boxShadow: '2px 2px 2px #0f0f0f',
    border: 'none',
  },
};

Modal.setAppElement('#root');

export const ModalVideo = ({ isOpen, onClose, movieVideo }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Inline Styles Modal Example"
      style={customStyles}
    >
      <CloseBtn onClick={onClose}>X</CloseBtn>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${movieVideo}`}
        muted={true}
        controls
        width="100%"
        height="100%"
      />
    </Modal>
  );
};
