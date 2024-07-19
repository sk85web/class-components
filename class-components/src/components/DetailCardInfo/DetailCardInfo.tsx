import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './DetailCardInfo.css';
import { ThemeContext } from '../../App';
import { setCardId } from '../../redux/slices/cardSlice';
import { RootState } from '../../redux/store';
import { useGetCardByIdQuery } from '../../redux/services/CardService';

const DetailCardInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { cardId } = useSelector((state: RootState) => state.card);

  const { data: detailInfo, isLoading, error } = useGetCardByIdQuery(cardId);

  if (isLoading) {
    return (
      <div className={`loading loading_detail-info loading-${theme}`}>
        Loading detail info...
      </div>
    );
  }

  if (error) {
    return <div className="detail-card-info">Something went wrong</div>;
  }

  if (!detailInfo) {
    return <div className="detail-card-info">Detail info not found.</div>;
  }

  const onClose = () => {
    dispatch(setCardId(null));
    navigate('/');
  };

  return (
    <div className="detail-card-info">
      <div className="detail-card-info-close">
        <button type="button" onClick={onClose} aria-label="Close">
          X
        </button>
      </div>
      <div className="detail-header">
        <img
          className="detail-info-img"
          src={`https://starwars-visualguide.com/assets/img/characters/${detailInfo.url.split('/')[5]}.jpg`}
          alt={detailInfo.name}
        />
        <h2 className="detail-info-name">{detailInfo.name}</h2>
      </div>
      <div className="detail-content">
        <h3>BioCard:</h3>
        <div>
          <strong>Height:</strong> {detailInfo.height}
        </div>
        <div>
          <strong>Mass:</strong> {detailInfo.mass}
        </div>
        <div>
          <strong>Hair color:</strong> {detailInfo.hair_color}
        </div>
        <div>
          <strong>Skin color:</strong> {detailInfo.skin_color}
        </div>
        <div>
          <strong>Eye color:</strong> {detailInfo.eye_color}
        </div>
        <div>
          <strong>Birth year:</strong> {detailInfo.birth_year}
        </div>
        <div>
          <strong>Created:</strong> {detailInfo.created}
        </div>
      </div>
    </div>
  );
};

export default DetailCardInfo;
