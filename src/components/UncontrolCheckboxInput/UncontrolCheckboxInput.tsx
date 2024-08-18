import React from 'react';

import styles from '../../pages/styles.module.css';

interface UncontrolCheckboxInputProps {
  label: string;
  error?: string;
}

const UncontrolCheckboxInput = React.forwardRef<
  HTMLInputElement,
  UncontrolCheckboxInputProps
>(({ label, error }, ref) => {
  return (
    <div className={styles['checkbox-container']}>
      <label>
        {label}
        <input type="checkbox" ref={ref} />
      </label>
      <p className={styles['error-message']}>{error}</p>
    </div>
  );
});

export default UncontrolCheckboxInput;
