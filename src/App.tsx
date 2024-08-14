import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import UncontrolFormPage from './pages/UncontrolFormPage';
import ControlFormPage from './pages/ControlFormPage';
import { ROUTES } from './constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.mainPage} element={<MainPage />} />
        <Route path={ROUTES.uncontrolPage} element={<UncontrolFormPage />} />
        <Route path={ROUTES.controlPage} element={<ControlFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
