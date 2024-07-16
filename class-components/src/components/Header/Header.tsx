import Search from '../Search/Search';

import { IHeaderProps } from '../../types/AppTypes';
import './Header.css';

const Header = ({ handleSearch, simulateError }: IHeaderProps) => {
  return (
    <div>
      <h1 className="header__title">Star Wars World</h1>
      <div className="search-field">
        <Search onSearch={handleSearch} />
        <button type="button" className="error-btn" onClick={simulateError}>
          Throw Error
        </button>
      </div>
    </div>
  );
};

export default Header;
