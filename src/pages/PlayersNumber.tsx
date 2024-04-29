import filter from '../assets/svg/filter.svg';
import sort from '../assets/svg/sort.svg';
import { FilterTable } from '../components/FilterTable';
import { PopupClick } from '../components/Sort';
import { SortTable } from '../components/SortTable';
import { PageLoader } from '../components/UI/PageLoader';
import { selectFilter, selectSortedOnline } from '../redux/filter/slice';
import { fetchTableGames } from '../redux/games/asyncAction';
import { selectGame } from '../redux/games/slice';
import { useAppDispatch } from '../redux/store';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const PlayersNumber = () => {
  const { tableGames } = useSelector(selectGame);
  const dispatch = useAppDispatch();
  const { RusAudio, RusSubtitles } = useSelector(selectFilter);

  // Логика с открытием /закртыием поп ап окна фильтрации
  const filterRef = useRef<HTMLDivElement>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (filterRef.current && !_e.composedPath().includes(filterRef.current)) {
        setFilterOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  // Логика с открытием /закртыием поп ап окна сортировки
  const sortRef = useRef<HTMLDivElement>(null);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (sortRef.current && !_e.composedPath().includes(sortRef.current)) {
        setSortOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  // Получение данных для таблицы

  const { sortName, sortProperty } = useSelector(selectSortedOnline);

  const getTableInfo = async () => {
    let sortBy = sortProperty ? 'maxOnline' : '';

    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    dispatch(fetchTableGames({ RusAudio, RusSubtitles, sortBy, order }));
  };

  useEffect(() => {
    getTableInfo();
  }, [RusAudio, RusSubtitles, sortName, sortProperty]);

  if (!tableGames.length) {
    return <PageLoader />;
  }

  const tableInfo = tableGames.map((obj) => (
    <tr key={obj.id}>
      <td>{obj.title}</td>
      <td>{obj.maxOnline}</td>
      <td>{obj.maxOffline}</td>
    </tr>
  ));

  return (
    <div className="players-number-block">
      <p>
        На данной странице представлена информация о том, какое количество человек может играть в ту
        или иную игру одновременно оффлайн и онлайн
      </p>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th className="game">
              Игра
              <div className="filterOptions" ref={filterRef}>
                <img src={filter} alt="filter" onClick={() => setFilterOpen(!filterOpen)} />
                <FilterTable open={filterOpen} />
              </div>
            </th>
            <th className="online">
              <div className="centered">
                Игроков онлайн
                <div className="sortOptions" ref={sortRef}>
                  <img src={sort} alt="sort" onClick={() => setSortOpen(!sortOpen)} />
                  <SortTable open={sortOpen} setOpen={setSortOpen} />
                </div>
              </div>
            </th>
            <th className="offline">Игроков оффлайн</th>
          </tr>
        </thead>
        <tbody>{tableInfo}</tbody>
      </table>
    </div>
  );
};
