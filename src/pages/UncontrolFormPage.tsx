import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

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
} from '../redux/slices/uncontrolFormSlice';
import { ROUTES } from '../constants';
import convertFileToBase64 from '../utils/convertFileToBase64';
import { useSelector } from 'react-redux';
import { selectCountries } from '../redux/slices/countrySlice';
import schema from '../utils/yupSchema';
import UncontrolTextInput from '../components/UncontrolTextInput/UncontrolTextInput';
import UncontrolRadioInput from '../components/UncontrolRadioInput/UncontrolRadioInput';
import UncontrolCheckboxInput from '../components/UncontrolCheckboxInput/UncontrolCheckboxInput';

const UncontrolledFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector(selectCountries);

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const acceptRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const getGenderValue = () => {
    return genderRefs.find(ref => ref.current?.checked)?.current?.value || '';
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formValues: FormValues = {
      username: usernameRef.current?.value || '',
      email: emailRef.current?.value || '',
      age: ageRef.current ? parseInt(ageRef.current.value) : 0,
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      gender: getGenderValue(),
      accept: acceptRef.current?.checked || false,
      avatar: avatarRef.current?.files?.[0] || '',
      country: countryRef.current?.value || '',
    };

    schema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        dispatch(setName(formValues.username));
        dispatch(setEmail(formValues.email));
        dispatch(setAge(formValues.age));
        dispatch(setPassword(formValues.password));
        dispatch(setConfirmPassword(formValues.confirmPassword));
        dispatch(setGender(formValues.gender));
        dispatch(setAccept(formValues.accept));
        dispatch(setCountry(formValues.country));

        if (formValues.avatar && typeof formValues.avatar !== 'string') {
          convertFileToBase64(formValues.avatar, base64Avatar => {
            if (typeof base64Avatar === 'string') {
              dispatch(setAvatar(base64Avatar));
            }
          });
        }

        navigate(ROUTES.mainPage);
      })
      .catch(validationErrors => {
        const newErrors: Record<string, string | undefined> = {};
        validationErrors.inner.forEach((error: yup.ValidationError) => {
          newErrors[error.path!] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <div>
      <h1 className={styles['page-title']}>Uncontrolled Form Page</h1>
      <form action="/" onSubmit={onSubmit} className={styles.container}>
        <UncontrolTextInput
          id="username"
          label="Name"
          type="text"
          placeholder="Enter your name"
          ref={usernameRef}
          error={errors.username}
        />

        <UncontrolTextInput
          id="email"
          label="Email"
          type="text"
          placeholder="Enter your email"
          ref={emailRef}
          error={errors.email}
        />

        <UncontrolTextInput
          id="age"
          label="Age"
          type="text"
          placeholder="Enter your age"
          ref={ageRef}
          error={errors.age}
        />

        <UncontrolTextInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
          error={errors.password}
        />

        <UncontrolTextInput
          id="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="Confirm password"
          ref={confirmPasswordRef}
          error={errors.confirmPassword}
        />

        <UncontrolRadioInput
          label="Gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          name="gender"
          refs={genderRefs}
          error={errors.gender}
        />

        <UncontrolCheckboxInput
          label="I accept all terms and conditions"
          ref={acceptRef}
        />

        <div className={styles['countries__container']}>
          <label htmlFor="countries">Countries</label>
          <select
            className={styles.select}
            id="countries"
            ref={countryRef}
            defaultValue=""
          >
            <option value="" disabled></option>
            {countries.map(country => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          <p className={styles['error-message']}>{errors.country}</p>
        </div>

        <div className={styles['avatar-container']}>
          <label>
            Upload Avatar
            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              ref={avatarRef}
            />
          </label>
          <p className={styles['error-message']}>{errors.avatar}</p>
        </div>

        <FormButton isDisabled={false} />
      </form>
    </div>
  );
};

export default UncontrolledFormPage;
