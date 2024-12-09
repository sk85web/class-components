import Search from '../Search/Search';

import './Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn';
import { useDispatch } from 'react-redux';
import { setHasError } from '../../redux/slices/uiSlice';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const simulateError = () => {
    dispatch(setHasError(true));
  };

  return (
    <div>
      <h1 className={`header__title header__title_${theme}`}>Star Wars World</h1>
      <div className="search-field">
        <Search />
        <button type="button" className={`theme-${theme}`} onClick={simulateError}>
          Throw Error
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
