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
  } = useSelector((state: RootState) => state.control);
  return (
    <div className={styles.form__item}>
      <h2>{formType.toUpperCase()}</h2>
      <ul className={styles.item__inner}>
        <li>
          <pre>Name: {formType === 'controlForm' ? username : ''}</pre>
        </li>
        <li>
          <pre>Age: {formType === 'controlForm' ? age : null}</pre>
        </li>
        <li>
          <pre>Email: {formType === 'controlForm' ? email : ''}</pre>
        </li>
        <li>
          <pre>Password: {formType === 'controlForm' ? password : ''}</pre>
        </li>
        <li>
          <pre>
            Confirm password:{' '}
            {formType === 'controlForm' ? confirmPassword : ''}
          </pre>
        </li>
        <li>
          <pre>Gender: {formType === 'controlForm' ? gender : ''}</pre>
        </li>
        <li>
          <pre>
            Acception Rules:{' '}
            {formType === 'controlForm' ? accept.toString() : ''}
          </pre>
        </li>
        <li>
          <pre>Avatar:</pre>
          {avatar ? (
            formType === 'controlForm' ? (
              <img
                src={avatar as string}
                alt="Avatar"
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            ) : null
          ) : (
            <p>Avatar isn't dowload</p>
          )}
        </li>
        <li>
          <pre>Country: {formType === 'controlForm' ? country : ''}</pre>
        </li>
      </ul>
    </div>
  );
};

export default FormData;
