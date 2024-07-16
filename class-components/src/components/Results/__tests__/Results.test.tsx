import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Results from '../Results';
import { IResultsProps, ICharacter } from '../../../types/AppTypes';
import '@testing-library/jest-dom';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const renderResults = (props: Partial<IResultsProps> = {}) => {
  const defaultProps: IResultsProps = {
    results: [],
    currentPage: 1,
    onItemClick: vi.fn(),
  };
  return render(<Results {...defaultProps} {...props} />);
};

describe('Results component', () => {
  it('renders the specified number of cards', () => {
    const results: ICharacter[] = [
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
      {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:18:20.704000Z',
        edited: '2014-12-20T21:17:50.313000Z',
        url: 'https://swapi.dev/api/people/4/',
      },
    ];

    renderResults({ results });

    const cards = screen.getAllByRole('heading', { level: 2 });
    expect(cards).toHaveLength(results.length);
  });

  it('displays appropriate message if no cards are present', () => {
    renderResults();

    expect(screen.getByText('Nothing was founded')).toBeInTheDocument();
  });
});
