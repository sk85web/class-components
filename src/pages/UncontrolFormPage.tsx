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
  const genderRefs = useRef<HTMLInputElement[]>([]);
  const acceptRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const getGenderValue = () => {
    return genderRefs.current.find(input => input.checked)?.value || '';
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
        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="username">
            Name
          </label>
          <input
            className={styles['text-input']}
            placeholder="Enter your name"
            type="text"
            id="username"
            ref={usernameRef}
          />
          <p className={styles['error-message']}>{errors.username}</p>
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
            ref={emailRef}
          />
          <p className={styles['error-message']}>{errors.email}</p>
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
            ref={ageRef}
          />
          <p className={styles['error-message']}>{errors.age}</p>
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
            ref={passwordRef}
          />
          <p className={styles['error-message']}>{errors.password}</p>
        </div>

        <div className={styles.input__container}>
          <label className={styles.label} htmlFor="confirm-password">
            Confirm password
          </label>
          <input
            className={styles['text-input']}
            placeholder="Confirm password"
            type="password"
            id="confirm-password"
            ref={confirmPasswordRef}
          />
          <p className={styles['error-message']}>{errors.confirmPassword}</p>
        </div>

        <div className={styles.input__container}>
          <label>Gender</label>
          <div className={styles['radio-container']}>
            <label className={styles['radio__item']}>
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                ref={el => el && genderRefs.current.push(el)}
              />
            </label>

            <label className={styles['radio__item']}>
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                ref={el => el && genderRefs.current.push(el)}
              />
            </label>
          </div>
          <p className={styles['error-message']}>{errors.gender}</p>
        </div>

        <div className={styles['checkbox-container']}>
          <label>
            I accept all terms and conditions
            <input type="checkbox" ref={acceptRef} />
          </label>
          <p className={styles['error-message']}>{errors.accept}</p>
        </div>

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
