'use client';

import { useContext, useState } from 'react';

import styles from './ThemeBtn.module.css';
import { ThemeContext } from '../../../pages';
import { THEMES } from '../../../constants';

const ThemeBtn = () => {
  const { setTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    const newTheme = isChecked ? THEMES.DARK : THEMES.LIGHT;
    setIsChecked(!isChecked);
    setTheme(newTheme);
  };

  return (
    <div className={styles['theme-switch-container']}>
      <input
        type="checkbox"
        className={styles['theme-switch-checkbox']}
        id="theme-switch"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <label className={styles['theme-switch-label']} htmlFor="theme-switch">
        <div className={styles['theme-icons-block']}>
          <span className={styles['theme-switch-icon']}>🌙</span>
          <span className={styles['theme-switch-icon']}>☀️</span>
        </div>
        <div className={styles['theme-switch-ball']}></div>
      </label>
    </div>
  );
};

export default ThemeBtn;
