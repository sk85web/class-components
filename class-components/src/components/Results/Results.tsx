import { useNavigate } from 'react-router-dom';

import './Results.css';
import { IResultsProps } from '../../types/AppTypes';

const Results = ({ results, currentPage, onItemClick }: IResultsProps) => {
  const navigate = useNavigate();

  const handleItemClick = (itemId: string) => {
    onItemClick(itemId);
    navigate(`/?frontpage=${currentPage}&details=${itemId}`);
  };

  return results.length ? (
    <div className="result">
      {results.map(result => {
        const splitUrl = result.url.split('/').filter(Boolean);
        const itemId = splitUrl[splitUrl.length - 1];
        return (
          <div
            key={result.name}
            className="result__item"
            onClick={() => handleItemClick(itemId)}
          >
            <h2>{result.name}</h2>
            <p className="result__description">
              Hi! My name is {result.name}. I was born in {result.birth_year} year. My
              gender is {result.gender}
            </p>
            <img
              className="result__item-img"
              src={`https://starwars-visualguide.com/assets/img/characters/${result.url.split('/')[5]}.jpg`}
              alt={result.name}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <h3>Nothing was founded</h3>
  );
};

export default Results;
