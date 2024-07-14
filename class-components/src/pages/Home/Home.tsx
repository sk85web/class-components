import { useEffect, useState } from 'react';

import './Home.css';
import { ISingleResult } from '../../types/SearchTypes';
import { BASE_URL, LS_QUERY } from '../../constants';
import Results from '../../components/Results/Results';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header';

const Home = () => {
  const [results, setResults] = useState<ISingleResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const query = localStorage.getItem(LS_QUERY) || '';
    fetchData(query, currentPage);
  }, [currentPage]);

  const fetchData = async (query: string, currentPage: number) => {
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
      );

      const totalResults = data.count;
      const pages = Math.ceil(totalResults / 10);
      setTotalPages(pages);
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
    fetchData(query, currentPage);
    setCurrentPage(1);
  };

  const simulateError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw Error('test error');
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const query = localStorage.getItem(LS_QUERY) || '';
    fetchData(query, page);
  };

  return (
    <div className="app">
      <Header handleSearch={handleSearch} simulateError={simulateError} />
      <div className="results-field">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <Results results={results} />
        )}
      </div>
      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
export default Home;
