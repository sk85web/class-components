import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from '../Card';
import { ISingleResult } from '../../../types/AppTypes';
import '@testing-library/jest-dom';

const renderCard = (result: ISingleResult, onClick = vi.fn()) => {
  return render(<Card result={result} onClick={onClick} />);
};

describe('Card component', () => {
  it('renders the real card data', () => {
    const result: ISingleResult = {
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
    };

    renderCard(result);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Luke Skywalker');
    expect(screen.getByText(/I was born in 19BBY year/i)).toBeInTheDocument();
    expect(screen.getByText(/My gender is male/i)).toBeInTheDocument();
    expect(screen.getByAltText('Luke Skywalker')).toBeInTheDocument();
  });

  it('calls onClick with the correct itemId when clicked', () => {
    const result: ISingleResult = {
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
    };

    const handleClick = vi.fn();
    const { getByText } = renderCard(result, handleClick);

    fireEvent.click(getByText('Luke Skywalker'));
    expect(handleClick).toHaveBeenCalledWith('1');
  });
});
