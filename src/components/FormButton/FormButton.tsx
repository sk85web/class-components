import styles from './FormButton.module.css';

interface FormButton {
  isDisabled: boolean;
}

const FormButton: React.FC<FormButton> = ({ isDisabled = true }) => {
  return (
    <button
      className={`${styles.button} ${isDisabled ? styles['btn-disabled'] : styles['btn-enabled']}`}
      disabled={isDisabled}
      type="submit"
    >
      Submit
    </button>
  );
};

export default FormButton;
