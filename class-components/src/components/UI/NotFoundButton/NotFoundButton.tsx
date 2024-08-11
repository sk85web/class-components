import { useRouter } from 'next/navigation';

import styles from './NotFoundButton.module.css';

const NotFoundButton = () => {
  const router = useRouter();
  const handleToMainPage = () => {
    router.push('/');
  };

  return (
    <div>
      <button
        className={styles['not-found-btn']}
        type="button"
        onClick={handleToMainPage}
      >
        Back Main
      </button>
    </div>
  );
};

export default NotFoundButton;
