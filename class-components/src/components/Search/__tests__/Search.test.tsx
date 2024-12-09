// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect, beforeEach } from 'vitest';
// import Search from '../Search';

// function mockLocalStorage() {
//   let store: Record<string, string> = {};

//   return {
//     getItem: (key: string) => store[key] || null,
//     setItem: (key: string, value: string) => {
//       store[key] = value;
//     },
//     clear: () => {
//       store = {};
//     },
//     removeItem: (key: string) => {
//       delete store[key];
//     },
//   };
// }

// describe('Search Component', () => {
//   const localStorageMock = mockLocalStorage();

//   beforeEach(() => {
//     Object.defineProperty(window, 'localStorage', {
//       value: localStorageMock,
//     });
//     localStorageMock.clear();
//   });

// it('saves the entered value to local storage on clicking the Search button', () => {
//   const searchQuery = 'Luke Skywalker';
//   const handleSearch = (query: string) => {
//     localStorage.setItem('searchTerm', query);
//   };

//   render(<Search onSearch={handleSearch} />);

//   fireEvent.change(screen.getByRole('textbox'), {
//     target: { value: searchQuery },
//   });
//   fireEvent.click(screen.getByRole('button', { name: /search/i }));

//   expect(localStorage.getItem('searchQuery')).toBe(searchQuery);
// });

// it('retrieves the value from local storage upon mounting', () => {
//   const searchQuery = 'Darth Vader';
//   localStorage.setItem('searchQuery', searchQuery);

//   render(<Search onSearch={() => {}} />);

//   expect(screen.getByRole('textbox')).toHaveValue(searchQuery);
// });
// });
