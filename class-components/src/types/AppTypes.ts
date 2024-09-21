import { ReactNode } from 'react';

export interface ISearchProps {
  onSearch: (query: string) => void;
}

export interface ISearchState {
  query: string;
}

export interface ISingleResult {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[] | [];
  species: string[] | [];
  vehicles: string[] | [];
  starships: string[] | [];
  created: string;
  edited: string;
  url: string;
}

export interface ICardProps {
  result: ISingleResult;
  onClick: (itemId: string) => void;
}

export interface IResultsProps {
  results: ISingleResult[];
  currentPage: number;
  onItemClick: (itemId: string) => void;
}

export interface IAppState {
  results: ISingleResult[];
  hasError: boolean;
  isLoading: boolean;
}

export interface IErrorProps {
  children: ReactNode;
}

export interface IErrorState {
  hasError: boolean;
}

export interface IApiResponse {
  count: number;
  next: string;
  previous: string;
  results: ISingleResult[];
}

export interface IHeaderProps {
  handleSearch: (query: string) => void;
  simulateError: () => void;
}

export interface IDetailCardInfoProps {
  itemId: string;
  onClose: () => void;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
