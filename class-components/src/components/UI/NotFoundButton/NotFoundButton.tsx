import Link from 'next/link';

import styles from './NotFoundButton.module.css';

const NotFoundButton = () => {
  return (
    <div>
      <Link href={'/'}>
        <button className={styles['not-found-btn']} type="button">
          Back Main
        </button>
      </Link>
    </div>
  );
};

export default NotFoundButton;
