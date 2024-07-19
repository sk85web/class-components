import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';

import './Search.css';
import { LS_QUERY } from '../../constants';
import { useLocalStorageQuery } from '../../hooks/useLocalStorageQuery';
import { ThemeContext } from '../../App';
import { AppDispatch, RootState } from '../../redux/store';
import { setCurrentPage } from '../../redux/slices/uiSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const dispatch: AppDispatch = useDispatch();
  const { hasError, currentPage } = useSelector((state: RootState) => state.ui);

  const [query, setQuery] = useLocalStorageQuery(LS_QUERY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSearch = () => {
    const normalizedQuery = query.trim();
    setQuery(normalizedQuery);
    dispatch(setCurrentPage(1));
    navigate(`?search=${normalizedQuery}&page=${currentPage}`);
  };

  if (hasError) {
    throw Error('test error');
  }

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
      <button className={`search_${theme}`} type="button" onClick={() => handleSearch()}>
        Search
      </button>
    </div>
  );
};

export default Search;
