'use client';

import React, { useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import './Card.css';
import { ICardProps, ICharacter } from '../../types/AppTypes';
import { ThemeContext } from '../../app/layout';
import { AppDispatch, RootState } from '../../app/redux/store';
import { setCardId } from '../../app/redux/slices/cardSlice';
import HeartIcon from '../HeartIcon/HeartIcon';
import { setSelectedCards } from '../../app/redux/slices/cardSlice';

const Card: React.FC<ICardProps> = ({ card }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch: AppDispatch = useDispatch();
  const { selectedCards } = useSelector((state: RootState) => state.card);

  const itemId = useMemo(() => {
    const splitUrl = card.url.split('/').filter(Boolean);
    return splitUrl[splitUrl.length - 1];
  }, [card]);

  const onCardClick = (cardId: string) => {
    dispatch(setCardId(cardId));
  };

  const handleSelectCard = (card: ICharacter) => {
    dispatch(setSelectedCards(card));
  };

  const isSelected = selectedCards.some(selectedCard => selectedCard.name === card.name);

  return (
    <div
      data-testid="card-item"
      className={`card__item card__item_${theme} `}
      onClick={() => onCardClick(itemId)}
    >
      <span
        className="card__item-select-block"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          handleSelectCard(card);
        }}
      >
        <HeartIcon isSelected={isSelected} />
      </span>
      <h2 className="card__title">{card.name}</h2>
      <div className="card__content">
        <p className="card__description">
          Hi! My name is {card.name}. I was born in {card.birth_year} year. My gender is{' '}
          {card.gender}
        </p>
        <Image
          className="card__item-img"
          src={`https://starwars-visualguide.com/assets/img/characters/${itemId}.jpg`}
          alt={card.name}
          width={200}
          height={300}
        />
      </div>
    </div>
  );
};

export default Card;
