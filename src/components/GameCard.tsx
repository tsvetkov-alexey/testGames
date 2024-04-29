import metacritic from '../assets/img/metacritic.png';
import { Link } from 'react-router-dom';

type cardType = {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  releaseDate: string;
  genre: string;
  availableOn: string;
};

export const GameCard = ({
  id,
  title,
  imageUrl,
  rating,
  releaseDate,
  genre,
  availableOn,
}: cardType) => {
  return (
    <div className="card-block">
      <div className="critics">
        <img src={metacritic} alt="metacritic" />
        <span>{rating}/10</span>
      </div>
      <div className="main-image">
        <img src={imageUrl} alt="tlou1" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <ul className="game-info">
          <li>Дата релиза: {releaseDate}</li>
          <li>Жанр: {genre}</li>
          <li>Доступно на {availableOn}</li>
        </ul>
        <Link to={`game/${id}`}>
          <button>Узнать больше</button>
        </Link>
      </div>
    </div>
  );
};
