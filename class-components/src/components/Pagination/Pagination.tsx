'use client';

import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import './Pagination.css';
import { ThemeContext } from '../../app/layout';
import { AppDispatch, RootState } from '../../app/redux/store';
import { CARDS_ON_PAGE, LS_QUERY } from '../../constants';
import { setCurrentPage } from '../../app/redux/slices/uiSlice';

import { useGetAllCardsQuery } from '../../app/redux/services/CardService';

const Pagination = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { currentPage } = useSelector((state: RootState) => state.ui);
  const dispatch: AppDispatch = useDispatch();

  let storedValue = '';
  if (typeof window !== 'undefined') {
    storedValue = localStorage.getItem(LS_QUERY) || '';
  }
  const { data, isLoading } = useGetAllCardsQuery({ query: storedValue, currentPage });

  const total = data ? Math.ceil(data.count / CARDS_ON_PAGE) : 0;
  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    router.push(`?page=${page}`);
  };

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
