import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Results.css';
import Card from '../Card/Card';
import { ThemeContext } from '../../App';
import { setCardId } from '../../redux/slices/cardSlice';
import { RootState } from '../../redux/store';

const Results = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.ui);
  const { cards } = useSelector((state: RootState) => state.card);

  const handleItemClick = (itemId: string) => {
    dispatch(setCardId(itemId));
    navigate(`/?frontpage=${currentPage}&details=${itemId}`);
  };

  return cards.length ? (
    <div className="result">
      {cards.map(result => (
        <Card key={result.name} result={result} onClick={handleItemClick} />
      ))}
    </div>
  ) : (
    <h3 className={`title_${theme}`}>Nothing was founded</h3>
  );
};

export default Results;
