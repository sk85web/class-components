import React, { useContext } from 'react';

import styles from './FlayoutBtn.module.css';
import { ThemeContext } from '../../../pages';
import { IFlayoutBtnProps } from '../../../types/AppTypes';

const FlayoutBtn: React.FC<IFlayoutBtnProps> = ({ text, onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles['flayoutBtn']} theme-${theme}`}
    >
      {text}
    </button>
  );
};

export default FlayoutBtn;
