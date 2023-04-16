import { ErrorImg, Text, Wrapper } from './ImageErrorView.styled';
import PropTypes from 'prop-types';

export default function ImageErrorView({ message }) {
  return (
    <Wrapper role="alert">
      <ErrorImg src="" width="240" alt="" />
      <Text>{message}</Text>
    </Wrapper>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string,
};
