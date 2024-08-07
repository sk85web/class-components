'use client';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

import styles from './Search.module.css';
import { LS_QUERY } from '../../constants';
import { useLocalStorageQuery } from '../../hooks/useLocalStorageQuery';
import { ThemeContext } from '../../pages';
import { AppDispatch, RootState } from '../../redux/store';
import { setCurrentPage } from '../../redux/slices/uiSlice';
import { useGetAllCardsQuery } from '../../redux/services/CardService';
import { setCards } from '../../redux/slices/cardSlice';

const Search = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const { currentPage } = useSelector((state: RootState) => state.ui);

  const [query, setQuery] = useLocalStorageQuery(LS_QUERY);
  const [tempQuery, setTempQuery] = useState(query);

  const { data, error } = useGetAllCardsQuery({ query, currentPage });

  useEffect(() => {
    if (data) {
      dispatch(setCards(data.results));
    }
  }, [data, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTempQuery(value);
  };

  const handleSearch = () => {
    const normalizedQuery = tempQuery?.trim();
    setQuery(normalizedQuery);
    dispatch(setCurrentPage(1));
    router.push(`?search=${normalizedQuery}&page=${currentPage}`);
  };

  if (error) {
    throw Error('test error');
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={tempQuery || ''}
        onChange={handleChange}
        placeholder="Search..."
        onKeyDown={onKeyDown}
        className={`${styles['search-input']} theme-${theme}`}
      />
      <button
        type="button"
        onClick={handleSearch}
        className={`theme-${theme} ${styles['search-btn']}`}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
