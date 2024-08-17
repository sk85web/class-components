import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';

import FormButton from '../components/FormButton/FormButton';
import styles from './styles.module.css';
import { FormValues } from '../types';
import {
  setAge,
  setAvatar,
  setEmail,
  setGender,
  setName,
  setPassword,
  setConfirmPassword,
  setAccept,
  setCountry,
} from '../redux/slices/controlFormSlice';
import { ROUTES } from '../constants';
import convertFileToBase64 from '../utils/convertFileToBase64';
import { useSelector } from 'react-redux';
import { selectCountries } from '../redux/slices/countrySlice';
import schema from '../utils/yupSchema';

const ControlFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      age: 0,
      password: '',
      confirmPassword: '',
      gender: '',
      accept: false,
      avatar: '',
      country: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const isFormValid = Object.keys(errors).length === 0;

  const countries = useSelector(selectCountries);

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(setName(data.username));
    dispatch(setEmail(data.email));
    if (data.age) {
      dispatch(setAge(data.age));
    }
    dispatch(setPassword(data.password));
    dispatch(setConfirmPassword(data.confirmPassword));
    dispatch(setGender(data.gender));
    dispatch(setAccept(data.accept));
    dispatch(setCountry(data.country));

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
            className={`${styles['text-input']} ${errors.username ? styles['error-border'] : ''}`}
            placeholder="Enter your name"
            type="text"
            id="username"
            {...register('username')}
          />
          <p className={styles['error-message']}>{errors.username?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={`${styles['text-input']} ${errors.email ? styles['error-border'] : ''}`}
            placeholder="email@example.com"
            type="email"
            id="email"
            {...register('email')}
          />
          <p className={styles['error-message']}>{errors.email?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="age">
            Age
          </label>
          <input
            className={`${styles['text-input']} ${errors.age ? styles['error-border'] : ''}`}
            placeholder="Enter your age"
            type="number"
            id="age"
            {...register('age')}
          />
          <p className={styles['error-message']}>{errors.age?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={`${styles['text-input']} ${errors.password ? styles['error-border'] : ''}`}
            placeholder="Enter your password"
            type="password"
            id="password"
            {...register('password')}
          />
          <p className={styles['error-message']}>{errors.password?.message}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="confirm-password">
            Cofirm password
          </label>
          <input
            className={`${styles['text-input']} ${errors.confirmPassword ? styles['error-border'] : ''}`}
            placeholder="Confirm password"
            type="password"
            id="confirm-password"
            {...register('confirmPassword')}
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

        <div className={styles['countries__container']}>
          <label htmlFor="countries">Countries</label>
          <Controller
            name="country"
            control={control}
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

        <div className={styles['avatar-container']}>
          <Controller
            name="avatar"
            control={control}
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

        <FormButton isDisabled={!isFormValid} />
      </form>
    </div>
  );
};

export default ControlFormPage;
