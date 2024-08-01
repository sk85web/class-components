import { useContext, useState } from 'react';
import './ThemeBtn.css';
import { ThemeContext } from '../../../App';
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
    <div className="theme-switch-container">
      <input
        type="checkbox"
        className="theme-switch-checkbox"
        id="theme-switch"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <label className="theme-switch-label" htmlFor="theme-switch">
        <div className="theme-icons-block">
          <span className="theme-switch-icon">🌙</span>
          <span className="theme-switch-icon">☀️</span>
        </div>
        <div className="theme-switch-ball"></div>
      </label>
    </div>
  );
};

export default ThemeBtn;
