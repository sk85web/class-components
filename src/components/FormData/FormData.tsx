import styles from './FormData.module.css';
import React from 'react';

interface FormProps {
  formType: 'uncontrolForm' | 'controlForm';
}

const FormData: React.FC<FormProps> = ({ formType }) => {
  return (
    <div className={styles.form__item}>
      <h2>{formType.toUpperCase()}</h2>
      <ul className={styles.item__inner}>
        <li>
          <pre>Name:</pre>
        </li>
        <li>
          <pre>Age:</pre>
        </li>
        <li>
          <pre>Email:</pre>
        </li>
        <li>
          <pre>Gender:</pre>
        </li>
        <li>
          <pre>Avatar:</pre>
        </li>
      </ul>
    </div>
  );
};

export default FormData;
