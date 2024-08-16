import { Link } from 'react-router-dom';

import styles from './Heder.module.css';
import { ROUTES } from '../../constants';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to={ROUTES.mainPage}>
          <span>Main</span>
        </Link>
        <Link to={ROUTES.uncontrolPage}>
          <span>Uncontrol Form</span>
        </Link>
        <Link to={ROUTES.controlPage}>
          <span>Control Form</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
