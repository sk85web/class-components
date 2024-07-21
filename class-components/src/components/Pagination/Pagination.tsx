import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Pagination.css';
import { ThemeContext } from '../../App';
import { AppDispatch, RootState } from '../../redux/store';
import { CARDS_ON_PAGE } from '../../constants';
import { setCurrentPage } from '../../redux/slices/uiSlice';
import { LS_QUERY } from '../../constants';

import { useGetAllCardsQuery } from '../../redux/services/CardService';

const Pagination = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { currentPage } = useSelector((state: RootState) => state.ui);

  const dispatch: AppDispatch = useDispatch();
  const query = localStorage.getItem(LS_QUERY) || '';
  const { data, isLoading } = useGetAllCardsQuery({ query, currentPage });

  const total = data ? Math.ceil(data.count / CARDS_ON_PAGE) : 0;

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    navigate(`?page=${page}`);
  };

  console.log('Pagination cards', data.results);

  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(total);
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
        disabled={currentPage === 1 || isLoading}
      >
        First
      </button>
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1 || isLoading}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handleNextPage}
        disabled={currentPage === total || isLoading}
      >
        Next
      </button>
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handleLastPage}
        disabled={currentPage === total || isLoading}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
