import { useEffect, useState } from 'react';

export const useLocalStorageQuery = (localStorageKey: string) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedQuery = localStorage.getItem(localStorageKey);
      if (storedQuery) {
        setQuery(storedQuery);
      }
    }
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, query);
  }, [localStorageKey, query]);

  return [query, setQuery] as const;
};
