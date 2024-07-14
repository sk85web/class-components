import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import { ISingleResult } from '../../types/AppTypes';
import { BASE_URL, LS_QUERY } from '../../constants';
import Results from '../../components/Results/Results';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header';
import DetailCardInfo from '../../components/DetailCardInfo/DetailCardInfo';

const Home = () => {
  const navigate = useNavigate();
  const resultsFieldRef = useRef(null);

  const [results, setResults] = useState<ISingleResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

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
          url: item.url,
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

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId);
  };

  const handleCloseDetails = () => {
    setSelectedItemId(null);
    navigate('/');
  };

  const handleResultsFieldClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === resultsFieldRef.current) {
      setSelectedItemId(null);
      console.log('click');
    }
  };

  return (
    <div className="app">
      <Header handleSearch={handleSearch} simulateError={simulateError} />
      <div className="content">
        <div
          className="results-field"
          ref={resultsFieldRef}
          onClick={handleResultsFieldClick}
        >
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <Results
              results={results}
              currentPage={currentPage}
              onItemClick={handleItemClick}
            />
          )}
          {!isLoading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onClose={handleCloseDetails}
            />
          )}
        </div>
        {selectedItemId && (
          <div className="detail-info">
            <DetailCardInfo itemId={selectedItemId} onClose={handleCloseDetails} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
