import { useNavigate } from 'react-router-dom';

import './Results.css';
import { IResultsProps } from '../../types/AppTypes';
import Card from '../Card/Card';

const Results = ({ results, currentPage, onItemClick }: IResultsProps) => {
  const navigate = useNavigate();




  
  const handleItemClick = (itemId: string) => {
    onItemClick(itemId);
    navigate(`/?frontpage=${currentPage}&details=${itemId}`);
  };

  return results.length ? (
    <div className="result">
      {results.map(result => (
        <Card key={result.name} result={result} onClick={handleItemClick} />
      ))}
    </div>
  ) : (
    <h3>Nothing was founded</h3>
  );
};

export default Results;
