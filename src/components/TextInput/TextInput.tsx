import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormValues } from '../../types';
import styles from '../../pages/styles.module.css';

interface TextInputProps {
  id: keyof FormValues;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  type,
  register,
  error,
}) => (
  <div className={styles.input__container}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <input
      className={`${styles['text-input']} ${error ? styles['error-border'] : ''}`}
      placeholder={placeholder}
      type={type}
      id={id}
      {...register(id)}
    />
    <p className={styles['error-message']}>{error?.message}</p>
  </div>
);

export default TextInput;
