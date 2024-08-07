'use client';

import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Russo_One } from 'next/font/google';

import Search from '../Search/Search';
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn';
import styles from './Header.module.css';
import { ThemeContext } from '../../pages';
import { setHasError } from '../../redux/slices/uiSlice';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const simulateError = () => {
    dispatch(setHasError(true));
  };

  return (
    <div>
      <h1
        className={`${russo.className} ${styles['header__title']} ${styles[`header__title_${theme}`]}`}
      >
        Star Wars World
      </h1>
      <div className={styles['search-field']}>
        <Search />
        <button
          type="button"
          onClick={simulateError}
          className={`theme-${theme} ${styles['error-btn']}`}
        >
          Throw Error
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
