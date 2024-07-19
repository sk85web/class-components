import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharacter } from '../../types/AppTypes';

interface ICardState {
  cardId: string | null;
  selectedCard: ICharacter | null;
  cards: ICharacter[] | [];
}

const initialState: ICardState = {
  cardId: '',
  selectedCard: null,
  cards: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardId: (state, action: PayloadAction<string | null>) => {
      state.cardId = action.payload;
    },
    setSelectedCard: (state, action: PayloadAction<ICharacter>) => {
      state.selectedCard = action.payload;
    },
    setCards: (state, action: PayloadAction<ICharacter[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { setCardId, setSelectedCard, setCards } = cardSlice.actions;

export default cardSlice.reducer;
