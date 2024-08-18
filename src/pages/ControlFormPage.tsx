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
import TextInput from '../components/TextInput/TextInput';
import RadioInput from '../components/RadioInput/RadioInput';
import CheckboxInput from '../components/CheckboxInput/CheckboxInput';

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
        <TextInput
          id="username"
          placeholder="Enter your name"
          label="Name"
          type="text"
          register={register}
          error={errors.username}
        />

        <TextInput
          id="email"
          placeholder="email@example.com"
          label="Email"
          type="email"
          register={register}
          error={errors.email}
        />

        <TextInput
          id="age"
          placeholder="Enter your age"
          label="Age"
          type="text"
          register={register}
          error={errors.age}
        />

        <TextInput
          id="password"
          placeholder="Enter your password"
          label="Password"
          type="password"
          register={register}
          error={errors.password}
        />

        <TextInput
          id="confirmPassword"
          placeholder="Confirm password"
          label="Confirm password"
          type="password"
          register={register}
          error={errors.confirmPassword}
        />

        <RadioInput
          name="gender"
          control={control}
          label="Gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          error={errors.gender}
        />

        <CheckboxInput
          name="accept"
          control={control}
          label="I accept all terms and conditions"
          error={errors.accept}
        />

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
