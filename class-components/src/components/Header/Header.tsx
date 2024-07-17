import Search from '../Search/Search';

import { IHeaderProps } from '../../types/AppTypes';
import './Header.css';
// import { useContext } from 'react';
// import { ThemeContext } from '../../App';
// import { THEMES } from '../../constants';
import ThemeBtn from '../UI/ThemeBtn/ThemeBtn';

const Header = ({ handleSearch, simulateError }: IHeaderProps) => {
  // const theme = useContext(ThemeContext);
  return (
    <div>
      <h1 className="header__title">Star Wars World</h1>
      <div className="search-field">
        <Search onSearch={handleSearch} />
        <button type="button" className="error-btn" onClick={simulateError}>
          Throw Error
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
