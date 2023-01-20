import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import './scss/app.scss';
import { store } from './redux/store';
import { GamePage } from './pages/GamePage/GamePage';
import MainLayout from './layouts/MainLayout';
import { OrderPage } from './pages/OrderPage/OrderPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
