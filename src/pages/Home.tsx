import { Filter } from '../components/Filter';
import { GameCard } from '../components/GameCard';
import { Sort } from '../components/Sort';
import { PageLoader } from '../components/UI/PageLoader';
import { selectFilter, selectSort } from '../redux/filter/slice';
import { fetchGames } from '../redux/games/asyncAction';
import { selectGame } from '../redux/games/slice';
import { useAppDispatch } from '../redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useAppDispatch();

  const { sortName, sortProperty } = useSelector(selectSort);
  const { PCavailable, PSavailable, Xboxavailable } = useSelector(selectFilter);
  const { items } = useSelector(selectGame);

  const getGames = async () => {
    let sortBy = sortProperty ? 'rating' : '';

    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    dispatch(fetchGames({ PCavailable, PSavailable, Xboxavailable, sortBy, order }));
  };

  useEffect(() => {
    getGames();
  }, [sortName, PCavailable, PSavailable, Xboxavailable]);

  const games =
    items.length > 0 ? items.map((obj) => <GameCard {...obj} key={obj.id} />) : <PageLoader />;

  return (
    <div className="main-block">
      <div className="sort-and-filter">
        <Sort />
        <Filter />
      </div>
      <div className="cards">{games}</div>
    </div>
  );
};
