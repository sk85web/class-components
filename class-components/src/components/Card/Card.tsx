import React, { useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Card.css';
import { ICardProps, ICharacter } from '../../types/AppTypes';
import { ThemeContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { setCardId } from '../../redux/slices/cardSlice';
import HeartIcon from '../Icons/HeartIcon/HeartIcon';
import { setSelectedCards } from '../../redux/slices/cardSlice';

const Card: React.FC<ICardProps> = ({ card }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.ui);
  const { selectedCards } = useSelector((state: RootState) => state.card);

  const itemId = useMemo(() => {
    const splitUrl = card.url.split('/').filter(Boolean);
    return splitUrl[splitUrl.length - 1];
  }, [card]);

  const onCardClick = (cardId: string) => {
    dispatch(setCardId(cardId));
    navigate(`/?frontpage=${currentPage}&details=${cardId}`);
  };

  const handleSelectCard = (card: ICharacter) => {
    dispatch(setSelectedCards(card));
  };

  const isSelected = selectedCards.some(selectedCard => selectedCard.name === card.name);

  return (
    <div
      data-testid="card-item"
      className={`card__item card__item_${theme} ${isSelected ? ' card__item_selected' : ''}`}
      onClick={() => onCardClick(itemId)}
    >
      <span
        className="card__item-select-block"
        onClick={e => {
          e.stopPropagation();
          handleSelectCard(card);
        }}
      >
        <HeartIcon isSelected={isSelected} />
      </span>
      <h2 className="card__title">{card.name}</h2>
      <p className="card__description">
        Hi! My name is {card.name}. I was born in {card.birth_year} year. My gender is{' '}
        {card.gender}
      </p>
      <img
        className="card__item-img"
        src={`https://starwars-visualguide.com/assets/img/characters/${itemId}.jpg`}
        alt={card.name}
      />
    </div>
  );
};

export default Card;
