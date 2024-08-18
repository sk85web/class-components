import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import MainPage from './pages/MainPage';
import UncontrolFormPage from './pages/UncontrolFormPage';
import ControlFormPage from './pages/ControlFormPage';
import { ROUTES } from './constants';
import Header from './components/Header/Header';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.mainPage} element={<MainPage />} />
          <Route path={ROUTES.uncontrolPage} element={<UncontrolFormPage />} />
          <Route path={ROUTES.controlPage} element={<ControlFormPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
