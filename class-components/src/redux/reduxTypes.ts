export interface ISearchState {
  value: string;
}

export interface ICardState {
  cardId: string;
}

export interface IUiState {
  isLoading: boolean;
  hasError: boolean;
  currentPage: number;
}
