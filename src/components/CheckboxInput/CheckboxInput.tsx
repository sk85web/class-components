import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { FormValues } from '../../types';
import styles from '../../pages/styles.module.css';

interface CheckboxInputProps {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  error?: FieldError;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  control,
  label,
  error,
}) => (
  <div className={styles['checkbox-container']}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <label>
            {label}
            <input
              type="checkbox"
              checked={field.value as boolean}
              onChange={e => field.onChange(e.target.checked)}
            />
          </label>
          {error && <p className={styles['error-message']}>{error.message}</p>}
        </>
      )}
    />
  </div>
);

export default CheckboxInput;
