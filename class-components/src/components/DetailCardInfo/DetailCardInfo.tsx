import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { ClipLoader } from 'react-spinners';

import Image from 'next/image';

import './DetailCardInfo.css';
import { setCardId } from '../../app/redux/slices/cardSlice';
import { RootState } from '../../app/redux/store';
import { useGetCardByIdQuery } from '../../app/redux/services/CardService';

const DetailCardInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { cardId } = useSelector((state: RootState) => state.card);
  const { currentPage } = useSelector((state: RootState) => state.ui);

  const { data: detailInfo, isLoading, error } = useGetCardByIdQuery(cardId);

  if (isLoading) {
    return <ClipLoader color="#3498db" size={50} />;
  }

  if (error) {
    return <div className="detail-card-info">Something went wrong</div>;
  }

  if (!detailInfo) {
    return <div className="detail-card-info">Detail info not found.</div>;
  }

  const onClose = () => {
    dispatch(setCardId(null));
    router.push(`?page=${currentPage}`);
  };

  const imageId = detailInfo.url.split('/')[5];

  return (
    <div className="detail-card-info">
      <div className="detail-card-info-close">
        <button type="button" onClick={onClose} aria-label="Close">
          X
        </button>
      </div>
      <div className="detail-header">
        <Image
          src={`https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`}
          alt={detailInfo.name}
          width={500}
          height={500}
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
