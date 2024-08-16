export interface FormValues {
  username: string;
  email: string;
  age: number | null;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  avatar: File | null;
}
