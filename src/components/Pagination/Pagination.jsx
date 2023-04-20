import { Paginate } from './Pagination.styled';
import PropTypes from 'prop-types';

const Pagination = ({ handlePageClick, pages }) => {
 //console.log(pages);
  return (
    <Paginate
      onPageChange={handlePageClick}
      pageCount={pages}
      breakLabel="..."
      nextLabel="»"
      previousLabel="«"
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

Pagination.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
};
