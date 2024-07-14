import React from 'react';
import './Pagination.css';
import { IPaginationProps } from '../../types/PaginationTypes';
import { useNavigate } from 'react-router-dom';

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const navigate = useNavigate();

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
          className={`page-button ${i === currentPage ? 'active' : ''}`}
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
