import * as yup from 'yup';

import { VALIDATE } from '../constants';

const schema = yup
  .object({
    username: yup
      .string()
      .required('User name is required')
      .matches(VALIDATE.FIRST_BIG_LETTER, 'First letter should be uppercase'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email address'),
    age: yup
      .number()
      .required('Age is required')
      .min(1, 'Incorrect age')
      .typeError('Amount must be a number'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        VALIDATE.PASSWORD,
        'Password should contains 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character',
      ),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], "Passwords don't match"),
    gender: yup.string().required('Please choose your gender'),
    accept: yup
      .boolean()
      .required()
      .oneOf([true], 'Please accept terms and conditions'),
    country: yup.string().required('Please select your country'),
    avatar: yup
      .mixed<File | string>()
      .required('Please upload an avatar')
      .test(
        'fileSize',
        'File size is too large or Unsupported Format',
        value => {
          if (typeof value === 'string') {
            return true;
          }
          return value && value.size <= VALIDATE.MAX_FILE_SIZE;
        },
      )
      .test('fileFormat', 'Unsupported Format', value => {
        if (typeof value === 'string') {
          return true;
        }
        return value && VALIDATE.SUPPORTED_FORMATS.includes(value.type);
      }),
  })
  .required();

export default schema;
