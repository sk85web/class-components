import Search from '../Search/Search';

import { IHeaderProps } from '../../types/AppTypes';
import './Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn';

const Header = ({ handleSearch, simulateError }: IHeaderProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1 className={`header__title header__title_${theme}`}>Star Wars World</h1>
      <div className="search-field">
        <Search onSearch={handleSearch} />
        <button type="button" className={`theme-${theme}`} onClick={simulateError}>
          Throw Error
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
