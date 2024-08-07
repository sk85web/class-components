'use client';

import { useEffect, useContext } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/store';
import styles from './Results.module.css';
import { LS_QUERY } from '../../constants';
import { ICharacter } from '../../types/AppTypes';
import Card from '../Card/Card';
import { useGetAllCardsQuery } from '../../redux/services/CardService';
import { ThemeContext } from '../../pages';
import { setCards } from '../../redux/slices/cardSlice';
import { AppDispatch } from '../../redux/store';

const Results = () => {
  const { currentPage } = useSelector((state: RootState) => state.ui);
  const { theme } = useContext(ThemeContext);
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards</div>;

  return cards.length && !isLoading ? (
    <div className={styles.result}>
      {cards.map(card => (
        <Link
          className={styles['card-link']}
          key={card.name}
          href={`/?frontpage=${currentPage}&details=${card.name}`}
        >
          <Card card={card} />
        </Link>
      ))}
    </div>
  ) : (
    <h3 className={styles[`title_${theme}`]}>Nothing was founded</h3>
  );
};

export default Results;
