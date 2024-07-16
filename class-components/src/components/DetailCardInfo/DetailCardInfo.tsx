import React, { useEffect, useState } from 'react';

import { BASE_URL } from '../../constants';
import { ICharacter, IDetailCardInfoProps } from '../../types/AppTypes';
import './DetailCardInfo.css';

const DetailCardInfo: React.FC<IDetailCardInfoProps> = ({ itemId, onClose }) => {
  const [detailInfo, setDetailInfo] = useState<ICharacter | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetailInfo = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(`${BASE_URL}people/${itemId}/`);
        if (!resp.ok) {
          throw new Error('Failed to fetch detail info');
        }
        const data: ICharacter = await resp.json();
        setDetailInfo(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching detail info:', error);
        setIsLoading(false);
      }
    };

    fetchDetailInfo();
  }, [itemId]);

  if (isLoading) {
    return <div className="loading loading_detail-info">Loading detail info...</div>;
  }

  if (!detailInfo) {
    return <div className="detail-card-info">Detail info not found.</div>;
  }

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
