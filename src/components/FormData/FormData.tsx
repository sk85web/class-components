import { useSelector } from 'react-redux';
import styles from './FormData.module.css';
import React from 'react';
import { RootState } from '../../redux/store';

interface FormProps {
  formType: 'uncontrolForm' | 'controlForm';
}

const FormData: React.FC<FormProps> = ({ formType }) => {
  const {
    username,
    age,
    email,
    password,
    confirmPassword,
    gender,
    accept,
    avatar,
    country,
  } = useSelector((state: RootState) =>
    formType === 'controlForm' ? state.control : state.uncontrol,
  );
  return (
    <div className={styles.form__item}>
      <h2>{formType.toUpperCase()}</h2>
      <ul className={styles.item__inner}>
        <li>
          <pre>Name: {username}</pre>
        </li>
        <li>
          <pre>Age: {age}</pre>
        </li>
        <li>
          <pre>Email: {email}</pre>
        </li>
        <li>
          <pre>Password: {password}</pre>
        </li>
        <li>
          <pre>
            Confirm password:
            {confirmPassword}
          </pre>
        </li>
        <li>
          <pre>Gender: {gender}</pre>
        </li>
        <li>
          <pre>Acception Rules: {accept.toString()}</pre>
        </li>
        <li>
          <pre>Avatar:</pre>
          {avatar ? (
            <img
              src={avatar as string}
              alt="Avatar"
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
          ) : (
            <p>Avatar isn't dowload</p>
          )}
        </li>
        <li>
          <pre>Country: {country}</pre>
        </li>
      </ul>
    </div>
  );
};

export default FormData;
