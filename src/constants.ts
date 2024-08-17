export const ROUTES = {
  mainPage: '/',
  uncontrolPage: '/uncontrol-form',
  controlPage: '/control-form',
};

export const VALIDATE = {
  FIRST_BIG_LETTER: /^[A-ZА-ЯЁ][a-zа-яё]*$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).*$/,
  SUPPORTED_FORMATS: ['image/jpeg', 'image/png'],
  MAX_FILE_SIZE: 2 * 1024 * 1024,
};

export const countries = [
  { label: 'Ukraine', value: 'UK' },
  { label: 'Poland', value: 'PL' },
  { label: 'Belarus', value: 'BLR' },
];
