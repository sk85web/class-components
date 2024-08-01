import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import './NotFoundButton.css';

const NotFoundButton = () => {
  const navigate = useNavigate();
  const handleToMainPage = () => {
    navigate(ROUTES.HOME_PAGE);
  };
  return (
    <div>
      <button className="not-found-btn" type="button" onClick={handleToMainPage}>
        Back Main
      </button>
    </div>
  );
};

export default NotFoundButton;
