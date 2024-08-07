'use client';

import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Russo_One } from 'next/font/google';

import Search from '../Search/Search';
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn';
import './Header.css';
import { ThemeContext } from '../../app/layout';
import { setHasError } from '../../app/redux/slices/uiSlice';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const simulateError = () => {
    dispatch(setHasError(true));
  };

  return (
    <div>
      <h1 className={`${russo.className} header__title header__title_${theme}`}>
        Star Wars World
      </h1>
      <div className="search-field">
        <Search />
        <button
          type="button"
          onClick={simulateError}
          className={`theme-${theme} error-btn`}
        >
          Throw Error
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
