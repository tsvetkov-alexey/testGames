import { PageLoader } from '../components/UI/PageLoader';
import { gameApi } from '../services/GameService';
import { useNavigate, useParams } from 'react-router-dom';

export const FullGameInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: gameInfo, isError } = gameApi.useFetchGameByIdQuery(id || '');

  if (isError) {
    navigate('/');
    return null;
  }

  if (!gameInfo) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="full-info">
        <div className="front-block">
          <div className="image">
            <img src={gameInfo.imageUrl} alt="game" className="main-picture" />
          </div>
          <div className="game-info">
            <h2>{gameInfo.title}</h2>
            <ul>
              <li>Дата выхода: {gameInfo.releaseDate}</li>
              <li>Жанр: {gameInfo.genre}</li>
              <li>Возрастное ограничение: {gameInfo.ageRate}+</li>
            </ul>
          </div>
        </div>
        <h3>Описание</h3>
        <p>{gameInfo.description}</p>
      </div>
    </>
  );
};
