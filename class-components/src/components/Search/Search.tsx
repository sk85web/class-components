import { ISearchProps } from '../../types/AppTypes';
import './Search.css';
import { LS_QUERY } from '../../constants';
import { useLocalStorageQuery } from '../../hooks/useLocalStorageQuery';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Search = ({ onSearch }: ISearchProps) => {
  const [query, setQuery] = useLocalStorageQuery(LS_QUERY);
  const { theme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSearch = () => {
    const normalizedQuery = query.trim();
    onSearch(normalizedQuery);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        onKeyDown={onKeyDown}
        className={'search-input ' + `theme-${theme}`}
      />
      <button className={`theme-${theme}`} type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
