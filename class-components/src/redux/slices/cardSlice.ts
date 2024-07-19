import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL, STATUS } from '../../constants';
import { ICharacter } from '../../types/AppTypes';

interface ICardState {
  cardId: string | null;
  cards: ICharacter[];
  count: number;
  status: STATUS;
}

interface IFetchParams {
  query: string;
  currentPage: number;
}

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (params: IFetchParams) => {
    const { query, currentPage } = params;
    const response: Response = await fetch(
      `${BASE_URL}/people/?search=${query}&page=${currentPage}`,
    );
    const data = await response.json();
    return data;
  },
);

const initialState: ICardState = {
  cardId: '',
  cards: [],
  count: 0,
  status: STATUS.LOADING,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardId: (state, action: PayloadAction<string | null>) => {
      state.cardId = action.payload;
    },
    setCardStatus: (state, action: PayloadAction<STATUS>) => {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCards.pending, state => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload.results;
      state.count = action.payload.count;
      state.status = STATUS.SUCCESS;
    });
    builder.addCase(fetchCards.rejected, state => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { setCardId, setCardStatus } = cardSlice.actions;

export default cardSlice.reducer;
