import { useRef, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Home.css';
import { LS_QUERY } from '../../constants';
import Results from '../../components/Results/Results';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header';
import DetailCardInfo from '../../components/DetailCardInfo/DetailCardInfo';
import { ThemeContext } from '../../App';
import { setCardId } from '../../redux/slices/cardSlice';
import { useGetAllCardsQuery } from '../../redux/services/CardService';
import { AppDispatch, RootState } from '../../redux/store';
import FlayoutMenu from '../../components/FlayoutMenu/FlayoutMenu';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const resultsFieldRef = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  const { cardId, selectedCards } = useSelector((state: RootState) => state.card);
  const { hasError, currentPage } = useSelector((state: RootState) => state.ui);

  const query = localStorage.getItem(LS_QUERY) || '';
  const { isLoading, error } = useGetAllCardsQuery({ query, currentPage });

  if (hasError) {
    if (error) throw Error('test error');
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
          {isLoading ? (
            <div className={`loading loading-${theme}`}>Loading...</div>
          ) : (
            <Results />
          )}
          {!isLoading && <Pagination />}
          {selectedCards && <FlayoutMenu />}
        </div>
        {cardId && <DetailCardInfo />}
      </div>
    </div>
  );
};
export default Home;
