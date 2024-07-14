import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants';

const NotFoundButton = () => {
  const navigate = useNavigate();
  const handleToMainPage = () => {
    navigate(ROUTES.HOME_PAGE);
  };
  return (
    <div>
      <button type="button" onClick={handleToMainPage}>
        Back Main
      </button>
    </div>
  );
};

export default NotFoundButton;
