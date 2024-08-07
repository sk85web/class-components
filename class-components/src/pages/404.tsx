import NotFoundButton from '../components/UI/NotFoundButton/NotFoundButton';
import { Russo_One } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });

const Not_Found = () => {
  return (
    <div className="not-found__page">
      <div className="not-found__content">
        <h1 className={russo.className}>Page not found</h1>
        <NotFoundButton />
      </div>
    </div>
  );
};

export default Not_Found;
