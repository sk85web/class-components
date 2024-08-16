export const ROUTES = {
  mainPage: '/',
  uncontrolPage: '/uncontrol-form',
  controlPage: '/control-form',
};

export const VALIDATE = {
  FIRST_BIG_LETTER: /^[A-ZА-ЯЁ][a-zа-яё]*$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).*$/,
};

export const countries = [
  { label: 'Ukrain', value: 'UK' },
  { label: 'Poland', value: 'PL' },
  { label: 'Belarus', value: 'BLR' },
];
