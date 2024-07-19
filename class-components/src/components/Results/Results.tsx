import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Results.css';
import Card from '../Card/Card';
import { ThemeContext } from '../../App';
import { setCardId, setCards, setSelectedCard } from '../../redux/slices/cardSlice';
import { RootState } from '../../redux/store';
import { LS_QUERY } from '../../constants';
import { useGetAllCardsQuery } from '../../redux/services/CardService';
import { ICharacter } from '../../types/AppTypes';

const Results = () => {
  const query = localStorage.getItem(LS_QUERY) || '';
  const { currentPage } = useSelector((state: RootState) => state.ui);
  const { data, isLoading, error } = useGetAllCardsQuery({ query, currentPage });
  const cards: ICharacter[] = data.results;

  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cards.length > 0) {
      dispatch(setCards(cards));
    }
  }, [cards]);
  console.log(cards);

  const onCardClick = (cardId: string) => {
    const selectedCard = cards.filter(card => card.url.split('/')[5] === cardId);
    dispatch(setCardId(cardId));
    dispatch(setSelectedCard(selectedCard[0]));
    navigate(`/?frontpage=${currentPage}&details=${cardId}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards</div>;

  return cards.length ? (
    <div className="result">
      {cards.map(result => (
        <Card key={result.name} result={result} onClick={onCardClick} />
      ))}
    </div>
  ) : (
    <h3 className={`title_${theme}`}>Nothing was founded</h3>
  );
};

export default Results;
