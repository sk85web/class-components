import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './FormInputControl.module.css';

interface IInput {
  register?: UseFormRegisterReturn;
  type: string;
  placeholder?: string;
  title?: string;
  accept?: string;
  id?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputControl = ({
  type,
  placeholder,
  title,
  accept,
  id,
  checked,
  onChange,
  register,
}: IInput) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>

      <input
        id={id}
        type={type}
        className={`${styles.input} ${type === 'radio' ? styles.radio : ''} ${type === 'checkbox' ? styles.checkbox : ''} ${type === 'file' ? styles.file : ''}`}
        placeholder={placeholder}
        accept={accept}
        checked={checked}
        onChange={onChange}
        {...register}
      />
    </div>
  );
};

export default FormInputControl;
