import { useSelector } from 'react-redux';
import styles from './FormData.module.css';
import React from 'react';
import { RootState } from '../../redux/store';

interface FormProps {
  formType: 'uncontrolForm' | 'controlForm';
}

const FormData: React.FC<FormProps> = ({ formType }) => {
  const { username, age, email, gender, avatar } = useSelector(
    (state: RootState) => state.control,
  );

  const avatarUrl = avatar ? URL.createObjectURL(avatar) : '';

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
          <pre>Gender: {formType === 'controlForm' ? gender : ''}</pre>
        </li>
        <li>
          <pre>Avatar:</pre>
          {avatar ? (
            formType === 'controlForm' ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            ) : null
          ) : (
            <p>Аватар не загружен</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FormData;
