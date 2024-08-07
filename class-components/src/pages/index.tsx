'use client';
import { useRef, createContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Results from '../components/Results/Results';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import { RootState, AppDispatch } from '../redux/store';
import FlayoutMenu from '../components/FlayoutMenu/FlayoutMenu';
import DetailCardInfo from '../components/DetailCardInfo/DetailCardInfo';
import { setCardId } from '../redux/slices/cardSlice';
import { IThemeContext } from '../types/AppTypes';
import { THEMES } from '../constants';

export const ThemeContext = createContext<IThemeContext>({
  theme: THEMES.DARK,
  setTheme: () => {},
});

const Home = () => {
  const [theme, setTheme] = useState(THEMES.DARK);
  const resultsFieldRef = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  const { cardId, selectedCards } = useSelector((state: RootState) => state.card);

  const handleResultsFieldClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === resultsFieldRef.current) {
      dispatch(setCardId(null));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app">
        <Header />
        {
          <div className="content">
            <div
              className="results-field"
              ref={resultsFieldRef}
              onClick={handleResultsFieldClick}
            >
              <Results />
              <Pagination />
              {selectedCards && <FlayoutMenu />}
            </div>
            {cardId && <DetailCardInfo />}
          </div>
        }
      </div>
    </ThemeContext.Provider>
  );
};
export default Home;
