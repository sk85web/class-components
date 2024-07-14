import { ISearchProps } from '../../types/AppTypes';
import './Search.css';
import { LS_QUERY } from '../../constants';
import { useLocalStorageQuery } from '../../hooks/useLocalStorageQuery';

const Search = ({ onSearch }: ISearchProps) => {
  const [query, setQuery] = useLocalStorageQuery(LS_QUERY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    onSearch(trimmedQuery);
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
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
