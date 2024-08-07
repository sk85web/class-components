'use client';

import React, { useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import styles from './Card.module.css';
import { ICardProps, ICharacter } from '../../types/AppTypes';
import { ThemeContext } from '../../pages';
import { AppDispatch, RootState } from '../../redux/store';
import { setCardId } from '../../redux/slices/cardSlice';
import HeartIcon from '../HeartIcon/HeartIcon';
import { setSelectedCards } from '../../redux/slices/cardSlice';

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
      className={`${styles['card__item']} ${styles[`card__item_${theme}`]}`}
      onClick={() => onCardClick(itemId)}
    >
      <span
        className={styles['card__item-select-block']}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          handleSelectCard(card);
        }}
      >
        <HeartIcon isSelected={isSelected} />
      </span>
      <h2 className={styles['card__item-select-block']}>{card.name}</h2>
      <div className={styles['card__content']}>
        <p className={styles['card__descripiton']}>
          Hi! My name is {card.name}. I was born in {card.birth_year} year. My gender is{' '}
          {card.gender}
        </p>
        <Image
          className={styles['card__item-img']}
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
