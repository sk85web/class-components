import styles from './FormInput.module.css';

interface IInput {
  name?: string;
  type: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  title: string;
  accept?: string;
  id: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<IInput> = ({
  type,
  placeholder,
  value,
  required = true,
  handleChange,
  title,
  accept,
  id,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>

      <input
        id={id}
        type={type}
        required={required}
        className={`${styles.input} ${type === 'radio' ? styles.radio : ''} ${type === 'checkbox' ? styles.checkbox : ''} ${type === 'file' ? styles.file : ''}`}
        placeholder={placeholder}
        value={value}
        accept={accept}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
