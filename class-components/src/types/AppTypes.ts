import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ISearchState {
  query: string;
}

export interface ICharacter {
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
  card: ICharacter;
}

export interface IAppState {
  results: ICharacter[];
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
  results: ICharacter[];
}

export interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export interface IFlayoutBtnProps {
  text: string;
  onClick: () => void;
}
