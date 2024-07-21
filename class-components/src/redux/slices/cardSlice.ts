import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharacter } from '../../types/AppTypes';

interface ICardState {
  cardId: string | null;
  selectedCards: ICharacter[];
  cards: ICharacter[] | [];
}

const initialState: ICardState = {
  cardId: null,
  selectedCards: [],
  cards: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardId: (state, action: PayloadAction<string | null>) => {
      state.cardId = action.payload;
    },
    setSelectedCards: (state, action: PayloadAction<ICharacter | ICharacter[]>) => {
      if (Array.isArray(action.payload)) {
        state.selectedCards = action.payload;
      } else {
        const newCard = action.payload;
        const existingCardIndex = state.selectedCards.findIndex(
          ({ name }) => newCard.name === name,
        );

        if (existingCardIndex !== -1) {
          state.selectedCards.splice(existingCardIndex, 1);
        } else {
          state.selectedCards.push(action.payload);
        }
      }
    },
    setCards: (state, action: PayloadAction<ICharacter[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { setCardId, setSelectedCards, setCards } = cardSlice.actions;

export default cardSlice.reducer;
