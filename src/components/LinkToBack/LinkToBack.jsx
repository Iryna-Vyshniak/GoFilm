import PropTypes from 'prop-types';
import { Link } from './LinkToBack.styled';
import { HiArrowLeft } from 'react-icons/hi';

export const LinkToBack = ({ children, to }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size="16" />
      {children}
    </Link>
  );
};

LinkToBack.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.any.isRequired,
};
