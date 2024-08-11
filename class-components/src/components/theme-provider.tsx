'use client';

import { createContext, useContext } from 'react';

// import { IThemeContext } from '../types/AppTypes';
import { THEMES } from '../constants';

type Theme = {
  colors: {
    dark: string;
    light: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    dark: THEMES.DARK,
    light: THEMES.LIGHT,
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
