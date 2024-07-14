import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import { ROUTES } from './constants';
import Not_Found from './pages/Not_Found/Not_Found';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<Home />} />
      <Route path={ROUTES.NOT_FOUND_PAGE} element={<Not_Found />} />
    </Routes>
  );
};
export default App;
