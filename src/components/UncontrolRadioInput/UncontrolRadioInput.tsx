import React from 'react';

import styles from '../../pages/styles.module.css';

interface UncontrolRadioInputProps {
  label: string;
  options: { label: string; value: string }[];
  name: string;
  refs: React.RefObject<HTMLInputElement>[];
  error?: string;
}

const UncontrolRadioInput: React.FC<UncontrolRadioInputProps> = ({
  label,
  options,
  name,
  error,
  refs,
}) => {
  return (
    <div className={styles.input__container}>
      <label>{label}</label>
      <div className={styles['radio-container']}>
        {options.map((option, index) => (
          <label key={option.value} className={styles['radio__item']}>
            {option.label}
            <input
              type="radio"
              name={name}
              value={option.value}
              ref={refs[index]}
            />
          </label>
        ))}
      </div>
      <p className={styles['error-message']}>{error}</p>
    </div>
  );
};

export default UncontrolRadioInput;
