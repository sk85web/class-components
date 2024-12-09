import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Results from '../Results';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { cardAPI } from '../../../redux/services/CardService';
import { beforeEach } from 'node:test';

const useGetAllCardsQueryMock = vi.spyOn(cardAPI, 'useGetAllCardsQuery');

describe('Results component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('check loading state', () => {
    useGetAllCardsQueryMock.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      refetch: vi.fn(),
    });

    render(
      <Provider store={store}>
        <Results />
      </Provider>,
    ),
      waitFor(() => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
      });
  });

  it('renders the specified number of cards', () => {
    const mockData = {
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'https://swapi.dev/api/planets/1/',
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/',
        },
      ],
    };

    useGetAllCardsQueryMock.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    });

    render(
      <Provider store={store}>
        <Results />
      </Provider>,
    );

    waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      const cards = screen.getAllByRole('heading', { level: 2 });
      console.log('Rendered cards', cards);
      expect(cards).toHaveLength(mockData.results.length);
    });
  });

  it('check error state', () => {
    useGetAllCardsQueryMock.mockReturnValue({
      data: null,
      isLoading: false,
      error: true,
      refetch: vi.fn(),
    });

    render(
      <Provider store={store}>
        <Results />
      </Provider>,
    ),
      waitFor(() => {
        expect(screen.getByText('Error loading cards')).toBeInTheDocument();
      });
  });
});
