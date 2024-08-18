import React from 'react';

import styles from '../../pages/styles.module.css';
import { FormValues } from '../../types';

interface UncontrolTextInputProps {
  id: keyof FormValues;
  label: string;
  placeholder: string;
  type: string;
  error?: string;
}

const UncontrolTextInput = React.forwardRef<
  HTMLInputElement,
  UncontrolTextInputProps
>(({ id, label, placeholder, type, error }, ref) => {
  return (
    <div className={styles.input__container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles['text-input']}
        placeholder={placeholder}
        type={type}
        id={id}
        ref={ref}
      />
      <p className={styles['error-message']}>{error}</p>
    </div>
  );
});

UncontrolTextInput.displayName = 'UncontrolTextInput';

export default UncontrolTextInput;
