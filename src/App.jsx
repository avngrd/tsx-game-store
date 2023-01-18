import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import './scss/app.scss';
import { store } from './redux/store';
import { GamePage } from './pages/GamePage/GamePage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:title" element={<GamePage />} />
      </Routes>
    </Provider>
  );
}

export default App;
