import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';

import './Search.css';
import { LS_QUERY } from '../../constants';
import { useLocalStorageQuery } from '../../hooks/useLocalStorageQuery';
import { ThemeContext } from '../../App';
import { AppDispatch, RootState } from '../../redux/store';
import { setCurrentPage } from '../../redux/slices/uiSlice';
import { useNavigate } from 'react-router-dom';
import { useGetAllCardsQuery } from '../../redux/services/CardService';
import { setCards } from '../../redux/slices/cardSlice';

const Search = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { currentPage } = useSelector((state: RootState) => state.ui);

  const [query, setQuery] = useLocalStorageQuery(LS_QUERY);
  const [tempQuery, setTempQuery] = useState(query);

  const { data, error } = useGetAllCardsQuery({ query, currentPage });

  useEffect(() => {
    if (data) {
      dispatch(setCards(data.results));
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTempQuery(value);
  };

  const handleSearch = () => {
    const normalizedQuery = tempQuery.trim();
    setQuery(normalizedQuery);
    dispatch(setCurrentPage(1));
    navigate(`?search=${normalizedQuery}&page=${currentPage}`);
  };

  if (error) {
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
        value={tempQuery}
        onChange={handleChange}
        placeholder="Search..."
        onKeyDown={onKeyDown}
        className={'search-input ' + `theme-${theme}`}
      />
      <button className={`theme-${theme}`} type="button" onClick={() => handleSearch()}>
        Search
      </button>
    </div>
  );
};

export default Search;
