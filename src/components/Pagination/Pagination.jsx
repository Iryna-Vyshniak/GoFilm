import { Paginate } from './Pagination.styled';
import PropTypes from 'prop-types';
//import ReactPaginate from 'react-paginate';

const Pagination = ({ handlePageClick, pages, currentPage }) => {
  //console.log(pages);

  return (
    <Paginate
      initialPage={currentPage - 1}
      nextLabel="»"
      onPageChange={handlePageClick}
      pageCount={pages}
      breakLabel="..."
      previousLabel="«"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
      onPageActive={window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}
    />
  );
};

export default Pagination;

Pagination.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
};
