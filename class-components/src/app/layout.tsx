'use client';

import { createContext, useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import CustomProvider from './redux/provider';

import { THEMES } from '../constants';
import { IThemeContext } from '../types/AppTypes';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const ThemeContext = createContext<IThemeContext>({
  theme: THEMES.DARK,
  setTheme: () => {},
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(THEMES.DARK);
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.className = theme === THEMES.DARK ? 'dark' : 'light';
    }
  }, [theme]);

  return (
    <html lang="en">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ErrorBoundary>
          <head>
            <title>Star Wars</title>
          </head>
          <body className={inter.className}>
            <CustomProvider>
              <main id="root">{children}</main>
            </CustomProvider>
          </body>
        </ErrorBoundary>
      </ThemeContext.Provider>
    </html>
  );
}
