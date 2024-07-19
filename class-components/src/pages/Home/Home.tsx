import { useEffect, useRef, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Home.css';
import { LS_QUERY, STATUS } from '../../constants';
import Results from '../../components/Results/Results';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header';
import DetailCardInfo from '../../components/DetailCardInfo/DetailCardInfo';
import { ThemeContext } from '../../App';
import { fetchCards, setCardId } from '../../redux/slices/cardSlice';
import { AppDispatch, RootState } from '../../redux/store';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const resultsFieldRef = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  const { cardId, status } = useSelector((state: RootState) => state.card);
  const { hasError, currentPage } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    const query = localStorage.getItem(LS_QUERY) || '';
    dispatch(fetchCards({ query, currentPage }));
  }, [currentPage]);

  if (hasError) {
    throw Error('test error');
  }

  const handleResultsFieldClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === resultsFieldRef.current) {
      dispatch(setCardId(null));
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <div
          className="results-field"
          ref={resultsFieldRef}
          onClick={handleResultsFieldClick}
        >
          {status === STATUS.LOADING ? (
            <div className={`loading loading-${theme}`}>Loading...</div>
          ) : (
            <Results />
          )}
          {status !== STATUS.LOADING && <Pagination />}
        </div>
        {cardId && <DetailCardInfo />}
      </div>
    </div>
  );
};
export default Home;
