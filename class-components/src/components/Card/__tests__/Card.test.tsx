import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '../Card';
import { ICharacter } from '../../../types/AppTypes';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
// import { setCardId } from '../../../redux/slices/cardSlice';
// import { setCardId } from '../../../redux/slices/cardSlice';
// import * as reduxHooks from 'react-redux';

const renderCard = (card: ICharacter) => {
  return render(
    <Provider store={store}>
      <Router>
        <Card card={card} />
      </Router>
    </Provider>,
  );
};

describe('Card component', () => {
  it('renders the real card data', () => {
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

    renderCard(card);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Luke Skywalker');
    expect(screen.getByText(/I was born in 19BBY year/i)).toBeInTheDocument();
    expect(screen.getByText(/My gender is male/i)).toBeInTheDocument();
    expect(screen.getByAltText('Luke Skywalker')).toBeInTheDocument();
  });
});

// it('triggers onClick with itemId when clicked', () => {
//   const card: ICharacter = {
//     name: 'Luke Skywalker',
//     height: '172',
//     mass: '77',
//     hair_color: 'blond',
//     skin_color: 'fair',
//     eye_color: 'blue',
//     birth_year: '19BBY',
//     gender: 'male',
//     homeworld: 'https://swapi.dev/api/planets/1/',
//     films: [],
//     species: [],
//     vehicles: [],
//     starships: [],
//     created: '2014-12-09T13:50:51.644000Z',
//     edited: '2014-12-20T21:17:56.891000Z',
//     url: 'https://swapi.dev/api/people/1/',
//   };

//   const dispatch = vi.fn();

//   vi.mock('react-redux', () => ({
//     useDispatch: () => dispatch,
//     useSelector: () => ({
//       currentPage: 1,
//       selectedCards: [],
//     }),
//   }));

//   renderCard(card);

//   fireEvent.click(screen.getByText('Luke Skywalker'));
//   expect(dispatch).toHaveBeenCalledWith(setCardId('1'));

// fireEvent.click(screen.getByRole('button', { name: /heart icon/i }));
// expect(dispatch).toHaveBeenCalledWith(setSelectedCards(card));
// });
