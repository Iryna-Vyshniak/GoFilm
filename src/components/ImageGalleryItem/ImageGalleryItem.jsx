import { useState } from 'react';
import { ListItem, ModalPicture, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { ModalDescr } from 'components/App.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ item }) => {
  const { largeImageURL, tags, webformatURL } = item;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ListItem aria-label="Zoom">
        <Picture
          onClick={toggleModal}
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
      </ListItem>
      {showModal && (
        <Modal onModalClose={toggleModal}>
          {
            <>
              <ModalPicture src={largeImageURL} alt={tags} />
              <ModalDescr>{tags}</ModalDescr>
            </>
          }
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
