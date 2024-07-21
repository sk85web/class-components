import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Results.css';
import Card from '../Card/Card';
import { ThemeContext } from '../../App';
import { setCards } from '../../redux/slices/cardSlice';
import { RootState } from '../../redux/store';
import { LS_QUERY } from '../../constants';
import { useGetAllCardsQuery } from '../../redux/services/CardService';
import { ICharacter } from '../../types/AppTypes';
import { AppDispatch } from '../../redux/store';

const Results = () => {
  const query = localStorage.getItem(LS_QUERY) || '';
  const { currentPage } = useSelector((state: RootState) => state.ui);
  const { data, isLoading, error } = useGetAllCardsQuery({ query, currentPage });
  const cards: ICharacter[] = data.results;

  const { theme } = useContext(ThemeContext);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (cards.length > 0) {
      dispatch(setCards(cards));
    }
  }, [cards, query, currentPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards</div>;

  return cards.length ? (
    <div className="result">
      {cards.map(card => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  ) : (
    <h3 className={`title_${theme}`}>Nothing was founded</h3>
  );
};

export default Results;
