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

export interface IResultsProps {
  results: ISingleResult[];
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
