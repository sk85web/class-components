import { Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

import './App.css';
import Home from './pages/Home/Home';
import { ROUTES, THEMES } from './constants';
import Not_Found from './pages/Not_Found/Not_Found';
import { IThemeContext } from './types/AppTypes';

export const ThemeContext = createContext<IThemeContext>({
  theme: THEMES.DARK,
  setTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState(THEMES.DARK);

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.className = theme === THEMES.DARK ? 'dark' : 'light';
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<Home />} />
        <Route path={ROUTES.NOT_FOUND_PAGE} element={<Not_Found />} />
      </Routes>
    </ThemeContext.Provider>
  );
};
export default App;
