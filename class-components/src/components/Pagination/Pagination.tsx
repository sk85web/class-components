import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Pagination.css';
import { ThemeContext } from '../../App';
import { AppDispatch, RootState } from '../../redux/store';
import { CARDS_ON_PAGE } from '../../constants';
import { setCurrentPage } from '../../redux/slices/uiSlice';
import { fetchCards } from '../../redux/slices/cardSlice';
import { LS_QUERY } from '../../constants';

const Pagination = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { currentPage } = useSelector((state: RootState) => state.ui);
  const { count } = useSelector((state: RootState) => state.card);

  const dispatch: AppDispatch = useDispatch();

  const total = Math.ceil(count / CARDS_ON_PAGE);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    const query = localStorage.getItem(LS_QUERY) || '';
    dispatch(fetchCards({ query, currentPage: page }));
    navigate(`?page=${page}`);
  };

  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(count);
  const handlePrevPage = () => handlePageChange(currentPage - 1);
  const handleNextPage = () => handlePageChange(currentPage + 1);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= total; i++) {
      pages.push(
        <button
          type="button"
          key={i}
          className={`page-button theme-${theme} ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handleNextPage}
        disabled={currentPage === total}
      >
        Next
      </button>
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handleLastPage}
        disabled={currentPage === total}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
