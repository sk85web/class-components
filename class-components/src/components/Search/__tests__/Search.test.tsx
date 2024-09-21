import { it, vi, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { LS_QUERY } from '../../../constants';
import Search from '../Search';

it('Search component saves query to local storage on Search button click', async () => {
  const mockOnSearch = vi.fn();
  const { getByPlaceholderText, getByText } = render(<Search onSearch={mockOnSearch} />);
  const input = getByPlaceholderText('Search...');
  const searchButton = getByText('Search');

  fireEvent.input(input, { target: { value: 'Luke Skywalker' } });
  fireEvent.click(searchButton);

  expect(localStorage.getItem(LS_QUERY)).toBe('Luke Skywalker');
});
