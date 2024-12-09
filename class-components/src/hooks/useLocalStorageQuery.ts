import { useEffect, useState } from 'react';

export const useLocalStorageQuery = (localStorageKey: string) => {
  const storedQuery = localStorage.getItem(localStorageKey);
  const [query, setQuery] = useState(() => storedQuery || '');

  useEffect(() => {
    if (storedQuery) {
      setQuery(storedQuery);
    }
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, query);
  }, [localStorageKey, query]);

  return [query, setQuery] as const;
};
