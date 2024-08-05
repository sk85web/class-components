import React, { useContext } from 'react';

import './FlayoutBtn.css';
import { ThemeContext } from '../../layout';
import { IFlayoutBtnProps } from '../../../types/AppTypes';

const FlayoutBtn: React.FC<IFlayoutBtnProps> = ({ text, onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button type="button" onClick={onClick} className={`flayoutBtn theme-${theme}`}>
      {text}
    </button>
  );
};

export default FlayoutBtn;
