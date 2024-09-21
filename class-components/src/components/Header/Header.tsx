import Search from '../Search/Search';

import { IHeaderProps } from '../../types/AppTypes';

const Header = ({ handleSearch, simulateError }: IHeaderProps) => {
  return (
    <div>
      <h1>Welcome to the Star Wars World</h1>
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
