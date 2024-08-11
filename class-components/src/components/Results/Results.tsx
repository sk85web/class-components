'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { RootState } from '../../app/redux/store';
import './Results.css';
import { LS_QUERY } from '../../constants';
import { ICharacter } from '../../types/AppTypes';
import Card from '../Card/Card';
import { useGetAllCardsQuery } from '../../app/redux/services/CardService';
// import { ThemeContext } from '../../app/layout';
import { setCards } from '../../app/redux/slices/cardSlice';
import { AppDispatch } from '../../app/redux/store';
import { useTheme } from '../theme-provider';

const Results = () => {
  const { currentPage } = useSelector((state: RootState) => state.ui);
  // const { theme } = useContext(ThemeContext);
  const theme = useTheme();
  const dispatch: AppDispatch = useDispatch();

  let storedValue = '';

  if (typeof window !== 'undefined') {
    storedValue = localStorage.getItem(LS_QUERY) || '';
  }

  const { data, isLoading, error } = useGetAllCardsQuery({
    query: storedValue,
    currentPage,
  });

  const cards: ICharacter[] = data?.results || [];

  useEffect(() => {
    if (cards.length > 0) {
      dispatch(setCards(cards));
    }
  }, [cards, currentPage, dispatch]);

  if (isLoading) return <ClipLoader color="#3498db" size={50} />;
  if (error) return <div>Error loading cards</div>;

  return cards.length && !isLoading ? (
    <div className="result">
      {cards.map(card => (
        <Link
          className="card-link"
          key={card.name}
          href={`/?frontpage=${currentPage}&details=${card.name}`}
        >
          <Card card={card} />
        </Link>
      ))}
    </div>
  ) : (
    <h3 className={`title_${theme}`}>Nothing was founded</h3>
  );
};

export default Results;
