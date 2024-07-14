import NotFoundButton from '../../components/UI/NotFoundButton/NotFoundButton';
import './Not_Found.css';

const Not_Found = () => {
  return (
    <div className="not-found__page">
      <div className="not-found__content">
        <h1>Page not found</h1>
        <NotFoundButton />
      </div>
    </div>
  );
};

export default Not_Found;
