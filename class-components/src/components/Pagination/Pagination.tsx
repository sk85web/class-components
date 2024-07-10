import React from 'react';
import './Pagination.css';
import { IPaginationProps } from '../../types/PaginationTypes';

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handlePrevPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          type="button"
          key={i}
          className={`page-button ${i === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
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
        className="nav-button"
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        type="button"
        className="nav-button"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        type="button"
        className="nav-button"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        type="button"
        className="nav-button"
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
