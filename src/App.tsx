import { MainLayout } from './layouts/MainLayOut';
import { FullGameInfo } from './pages/FullGameInfo';
import { Home } from './pages/Home';
import { PlayersNumber } from './pages/PlayersNumber';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<FullGameInfo />} />
        <Route path="/players" element={<PlayersNumber />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
