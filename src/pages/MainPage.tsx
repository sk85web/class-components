import { Link } from 'react-router-dom';

import FormData from '../components/FormData/FormData';
import { ROUTES } from '../constants';
import styles from './styles.module.css';

const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <Link to={ROUTES.uncontrolPage}>
        <FormData formType="uncontrolForm" />
      </Link>
      <Link to={ROUTES.controlPage}>
        <FormData formType="controlForm" />
      </Link>
    </div>
  );
};

export default MainPage;
