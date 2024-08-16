import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './FormCheckControl.module.css';

interface IInput {
  register?: UseFormRegisterReturn;
  type: string;
  title?: string;
  checked?: boolean;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormCheckControl = ({
  type,
  checked,
  onChange,
  title,
  id,
  value,
}: IInput) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>

      <input
        type={type}
        className={`${styles.input} ${styles.radio}`}
        checked={checked}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormCheckControl;
