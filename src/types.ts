export interface FormValues {
  username: string;
  email: string;
  age: number | null;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  avatar: File | string;
  country: string;
}

export interface CountryTypes {
  countries: { label: string; value: string }[];
}
