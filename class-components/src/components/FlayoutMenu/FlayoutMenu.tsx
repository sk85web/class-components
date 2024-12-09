import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import FlayoutBtn from '../UI/FlayoutBtn/FlayoutBtn';
import { setSelectedCards } from '../../redux/slices/cardSlice';
import './FlayoutMenu.css';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../App';
import { saveAs } from 'file-saver';

const FlayoutMenu = () => {
  const { theme } = useContext(ThemeContext);
  const { selectedCards } = useSelector((state: RootState) => state.card);
  const dispatch: AppDispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedCards.length > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedCards]);

  if (selectedCards.length === 0) return null;

  const unSelect = () => {
    dispatch(setSelectedCards([]));
  };

  const getItemType = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 3];
  };

  const downLoad = () => {
    const csvContent = selectedCards
      .map(card => {
        const { name, url, ...otherInfo } = card;
        return `${name}, ${url}, ${JSON.stringify(otherInfo)}`;
      })
      .join('\n');

    const itemType =
      selectedCards.length > 0 ? getItemType(selectedCards[0].url) : 'items';
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const filename = `${selectedCards.length}_${itemType}.csv`;
    saveAs(blob, filename);
  };

  return (
    <div className="flayout">
      <div className={`flayout-wrapper  theme-${theme} ${isVisible ? 'show' : ''}`}>
        <h2>
          {selectedCards.length === 1
            ? '1 hero is selected'
            : `${selectedCards.length} heroes are selected`}
        </h2>
        <div className="flayout__btns">
          <FlayoutBtn text="Unselect All" onClick={unSelect} />
          <FlayoutBtn text="Download" onClick={downLoad} />
        </div>
      </div>
    </div>
  );
};

export default FlayoutMenu;
