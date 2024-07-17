import React, { useContext } from 'react';
import './Pagination.css';
import { IPaginationProps } from '../../types/AppTypes';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    navigate(`?page=${page}`);
  };
  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(totalPages);
  const handlePrevPage = () => handlePageChange(currentPage - 1);
  const handleNextPage = () => handlePageChange(currentPage + 1);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
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
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        type="button"
        className={`nav-button theme-${theme}`}
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
