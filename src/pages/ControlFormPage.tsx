import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import FormButton from '../components/FormButton/FormButton';
import styles from './styles.module.css';
import { FormValues } from '../types';
import {
  setAge,
  setAvatar,
  setEmail,
  setGender,
  setName,
} from '../redux/slices/controlFormSlice';
import { ROUTES, VALIDATE } from '../constants';
import convertFileToBase64 from '../utils/convertFileToBase64';
import { useSelector } from 'react-redux';
import { selectCountries } from '../redux/slices/countrySlice';

const ControlFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      age: null,
      password: '',
      confirmPassword: '',
      gender: '',
      accept: false,
      avatar: '',
      country: '',
    },
  });
  const { register, handleSubmit, formState, watch, control } = form;

  const { errors } = formState;
  const isFormValid = Object.keys(errors).length === 0;

  const countries = useSelector(selectCountries);

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(setName(data.username));
    dispatch(setEmail(data.email));
    if (data.age) {
      dispatch(setAge(data.age));
    }
    dispatch(setGender(data.gender));

    if (data.avatar && typeof data.avatar !== 'string') {
      convertFileToBase64(data.avatar, base64Avatar => {
        if (typeof base64Avatar === 'string') {
          dispatch(setAvatar(base64Avatar));
        }
      });
    }

    navigate(ROUTES.mainPage);
  };

  return (
    <div>
      <h1 className={styles['page-title']}>Control Form Page</h1>
      <form
        action="/"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.container}
      >
        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="username">
            Name
          </label>
          <input
            className={styles['text-input']}
            placeholder="Enter your name"
            type="text"
            id="username"
            {...register('username', {
              required: {
                value: true,
                message: 'User name is required',
              },
              pattern: {
                value: VALIDATE.FIRST_BIG_LETTER,
                message: 'First letter should be uppercase',
              },
            })}
          />
          <p className={styles['error-message']}>{errors.username?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="age">
            Age
          </label>
          <input
            className={styles['text-input']}
            placeholder="Enter your age"
            type="number"
            id="age"
            {...register('age', {
              required: {
                value: true,
                message: 'Age is required',
              },
              min: {
                value: 1,
                message: 'Incorrect age',
              },
            })}
          />
          <p className={styles['error-message']}>{errors.age?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles['text-input']}
            placeholder="email@example.com"
            type="email"
            id="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
              pattern: {
                value: VALIDATE.EMAIL,
                message: 'Invalid email adress',
              },
            })}
          />
          <p className={styles['error-message']}>{errors.email?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles['text-input']}
            placeholder="Enter your password"
            type="password"
            id="password"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required',
              },
              pattern: {
                value: VALIDATE.PASSWORD,
                message:
                  'Password should contains 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character',
              },
            })}
          />
          <p className={styles['error-message']}>{errors.password?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="confirm-password">
            Cofirm password
          </label>
          <input
            className={styles['text-input']}
            placeholder="Confirm password"
            type="password"
            id="confirm-password"
            {...register('confirmPassword', {
              required: {
                value: true,
                message: 'Confirm password is required',
              },
              validate: value =>
                value === watch('password') || "Passwords don't match",
            })}
          />
          <p className={styles['error-message']}>
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div className={styles.input__container}>
          <label>Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: 'Please select your gender' }}
            render={({ field, fieldState: { error } }) => (
              <div className={styles['radio-container']}>
                <label className={styles['radio__item']}>
                  Male
                  <input
                    type="radio"
                    value="male"
                    checked={field.value === 'male'}
                    onChange={() => field.onChange('male')}
                  />
                </label>

                <label className={styles['radio__item']}>
                  Female
                  <input
                    type="radio"
                    value="female"
                    checked={field.value === 'female'}
                    onChange={() => field.onChange('female')}
                  />
                </label>

                {error && (
                  <p className={styles['error-message']}>{error.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <div className={styles['checkbox-container']}>
          <Controller
            name="accept"
            control={control}
            rules={{ required: 'Please accept terms and conditions' }}
            render={({ field, fieldState: { error } }) => (
              <>
                <label>
                  I accept all terms and conditions
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={e => field.onChange(e.target.checked)}
                  />
                </label>

                {error && (
                  <p className={styles['error-message']}>{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className={styles['avatar-container']}>
          <Controller
            name="avatar"
            control={control}
            rules={{
              required: 'Please upload avatar',
              validate: {
                format: file => {
                  if (file instanceof File) {
                    return (
                      file.type === 'image/jpeg' ||
                      file.type === 'image/png' ||
                      'Unsupported file format! Download only jpeg/png'
                    );
                  }
                  return 'Invalid file';
                },
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <label>
                  Upload Avatar
                  <input
                    type="file"
                    id="avatar"
                    accept="image/png, image/jpeg"
                    onChange={e => {
                      const file = e.target.files ? e.target.files[0] : null;
                      field.onChange(file);
                    }}
                  />
                </label>
                {error && (
                  <p className={styles['error-message']}>{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className={styles['countries__container']}>
          <label htmlFor="countries">Countries</label>
          <Controller
            name="country"
            control={control}
            rules={{
              required: 'Please choose country',
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select
                  {...field}
                  options={countries}
                  placeholder="Select a country"
                  onChange={option => field.onChange(option?.value)}
                  value={countries.find(
                    country => country.value === field.value,
                  )}
                />

                {error && (
                  <p className={styles['error-message']}>{error.message}</p>
                )}
              </>
            )}
          />
        </div>

        <FormButton isDisabled={!isFormValid} />
      </form>
    </div>
  );
};

export default ControlFormPage;
