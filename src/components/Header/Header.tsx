import { NavLink } from 'react-router-dom';

import styles from './Heder.module.css';
import { ROUTES } from '../../constants';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to={ROUTES.mainPage}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Main
        </NavLink>
        <NavLink
          to={ROUTES.uncontrolPage}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Uncontrol Form
        </NavLink>
        <NavLink
          to={ROUTES.controlPage}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Control Form
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
