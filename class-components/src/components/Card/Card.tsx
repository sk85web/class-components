import React, { useContext } from 'react';

import { ICardProps } from '../../types/AppTypes';
import { ThemeContext } from '../../App';

const Card: React.FC<ICardProps> = ({ result, onClick }) => {
  const { theme } = useContext(ThemeContext);

  const splitUrl = result.url.split('/').filter(Boolean);
  const itemId = splitUrl[splitUrl.length - 1];

  return (
    <div className={`result__item result__item_${theme}`} onClick={() => onClick(itemId)}>
      <h2 className="result__title">{result.name}</h2>
      <p className="result__description">
        Hi! My name is {result.name}. I was born in {result.birth_year} year. My gender is{' '}
        {result.gender}
      </p>
      <img
        className="result__item-img"
        src={`https://starwars-visualguide.com/assets/img/characters/${splitUrl[splitUrl.length - 1]}.jpg`}
        alt={result.name}
      />
    </div>
  );
};

export default Card;
