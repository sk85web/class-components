import { useEffect, useState } from 'react';

import './App.css';
import Search from './components/Search/Search';

import { ISingleResult } from './types/SearchTypes';
import { BASE_URL, LS_QUERY, TOTAL_PAGES } from './constants';
import Results from './components/Results/Results';
import Pagination from './components/Pagination/Pagination';

const App = () => {
  const [results, setResults] = useState<ISingleResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const query = localStorage.getItem(LS_QUERY) || '';
    fetchData(query, currentPage);
  }, [currentPage]);

  const fetchData = async (query: string, currentPage?: number) => {
    setIsLoading(true);
    try {
      const resp = await fetch(`${BASE_URL}/people/?search=${query}&page=${currentPage}`);
      if (!resp.ok) {
        throw new Error('Fetch response failed');
      }
      const data = await resp.json();

      setResults(
        data.results.map((item: ISingleResult) => ({
          name: item.name,
          birth_year: item.birth_year,
          height: item.height,
          mass: item.mass,
          hair_color: item.hair_color,
          gender: item.gender,
          skin_color: item.skin_color,
          eye_color: item.eye_color,
          created: item.created,
        })),
      ),
        setHasError(false);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    fetchData(query);
  };

  const simulateError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw Error('test error');
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData('', page);
  };

  return (
    <div className="app">
      <h1>Welcome to the Star Wars World</h1>
      <div className="search-field">
        <Search onSearch={handleSearch} />
        <button type="button" className="error-btn" onClick={simulateError}>
          Throw Error
        </button>
      </div>
      <div className="results-field">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <Results results={results} />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default App;
