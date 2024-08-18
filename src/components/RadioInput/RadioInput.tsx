import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { FormValues } from '../../types';
import styles from '../../pages/styles.module.css';

interface RadioInputProps {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  options: { value: string; label: string }[];
  error?: FieldError;
}

const RadioInput: React.FC<RadioInputProps> = ({
  name,
  control,
  label,
  options,
  error,
}) => (
  <div className={styles.input__container}>
    <label>{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles['radio-container']}>
          {options.map(option => (
            <label key={option.value} className={styles['radio__item']}>
              {option.label}
              <input
                type="radio"
                value={option.value}
                checked={field.value === option.value}
                onChange={() => field.onChange(option.value)}
              />
            </label>
          ))}
          {error && <p className={styles['error-message']}>{error.message}</p>}
        </div>
      )}
    />
  </div>
);

export default RadioInput;
