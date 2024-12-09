import { fireEvent, render } from '@testing-library/react';
import FlayoutMenu from '../FlayoutMenu';
import { describe, it, expect, vi } from 'vitest';
import * as reduxHooks from 'react-redux';
import { ICharacter } from '../../../types/AppTypes';
import { setSelectedCards } from '../../../redux/slices/cardSlice';

vi.mock('react-redux');

const card: ICharacter = {
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

describe('FlayoutMenu', () => {
  it('should not be on display', () => {
    vi.spyOn(reduxHooks, 'useSelector').mockReturnValue({ selectedCards: [] });

    const { queryByText } = render(<FlayoutMenu />);

    expect(queryByText(/heroes are selected/)).toBeNull();
  });

  it('should be on display one item', () => {
    vi.spyOn(reduxHooks, 'useSelector').mockReturnValue({ selectedCards: [card] });

    const { getByText, getByRole } = render(<FlayoutMenu />);

    expect(getByText('1 hero is selected')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Unselect All' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Download' })).toBeInTheDocument();
  });

  it('should be on display more than one item', () => {
    vi.spyOn(reduxHooks, 'useSelector').mockReturnValue({ selectedCards: [card, card] });

    const { getByText, getByRole } = render(<FlayoutMenu />);

    expect(getByText('2 heroes are selected')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Unselect All' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Download' })).toBeInTheDocument();
  });

  it('should unselect all items', () => {
    const dispatch = vi.fn();

    vi.spyOn(reduxHooks, 'useSelector').mockReturnValue({ selectedCards: [card] });
    vi.spyOn(reduxHooks, 'useDispatch').mockReturnValue(dispatch);

    const { getByRole } = render(<FlayoutMenu />);

    const unselectButton = getByRole('button', { name: 'Unselect All' });
    fireEvent.click(unselectButton);

    expect(dispatch).toHaveBeenCalledWith(setSelectedCards([]));
  });
});
