import PropTypes from 'prop-types';

import { HiArrowLeft } from 'react-icons/hi';

import { Link } from './LinkToBack.styled';

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
  to: PropTypes.any.isRequired
};
