import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharacter } from '../../types/AppTypes';

interface ICardState {
  cardId: string | null;
  selectedCard: ICharacter | null;
}

const initialState: ICardState = {
  cardId: '',
  selectedCard: null,
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
  },
});

export const { setCardId, setSelectedCard } = cardSlice.actions;

export default cardSlice.reducer;
