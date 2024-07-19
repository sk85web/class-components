import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';

import './Search.css';
import { LS_QUERY } from '../../constants';
import { useLocalStorageQuery } from '../../hooks/useLocalStorageQuery';
import { ThemeContext } from '../../App';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchCards } from '../../redux/slices/cardSlice';
import { setCurrentPage } from '../../redux/slices/uiSlice';

const Search = () => {
  const dispatch: AppDispatch = useDispatch();
  const { hasError } = useSelector((state: RootState) => state.ui);

  const [query, setQuery] = useLocalStorageQuery(LS_QUERY);
  const { theme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSearch = (query: string) => {
    const normalizedQuery = query.trim();
    dispatch(fetchCards({ query: normalizedQuery, currentPage: 1 }));
    dispatch(setCurrentPage(1));
  };

  if (hasError) {
    throw Error('test error');
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(query);
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
      <button
        className={`search_${theme}`}
        type="button"
        onClick={() => handleSearch(query)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
