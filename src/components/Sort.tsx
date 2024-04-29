import arrow from '../assets/svg/arrow.svg';
import def from '../assets/svg/default.svg';
import sortSvg from '../assets/svg/sort.svg';
import { selectSort, setSort } from '../redux/filter/slice';
import { SortItem, sortPropertyEnum } from '../redux/filter/types';
import { useAppDispatch } from '../redux/store';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export type PopupClick = MouseEvent & {
  composedPath(): Node[];
};

const list: SortItem[] = [
  { sortName: 'умолчанию', sortProperty: sortPropertyEnum.RATING_DEFAULT },
  { sortName: 'возрастанию рейтинга', sortProperty: sortPropertyEnum.RATING_ASK },
  { sortName: 'убыванию рейтинга', sortProperty: sortPropertyEnum.RATING_DESC },
];

export const Sort = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { sortName } = useSelector(selectSort);

  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (sortRef.current && !_e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const defaultSelected = () => {
    dispatch(setSort(list[0]));
    setOpen(false);
  };

  const ascRating = () => {
    dispatch(setSort(list[1]));
    setOpen(false);
  };

  const descRating = () => {
    dispatch(setSort(list[2]));
    setOpen(false);
  };

  return (
    <div className="sort" ref={sortRef}>
      <img src={sortSvg} alt="sort" />
      <span>
        Сортировать по
        <span className="sort-type" onClick={() => setOpen(!open)}>
          {sortName}
        </span>
      </span>
      {open && (
        <div className="sort-block">
          <div className="default">
            <img src={def} alt="default" />
            <span onClick={defaultSelected}>умолчанию</span>
          </div>
          <div className="rating-asc-block">
            <img src={arrow} alt="arrowUp" />
            <span onClick={ascRating}>возрастанию рейтинга</span>
          </div>
          <div className="rating-desc-block">
            <img src={arrow} alt="arrowDown" />
            <span onClick={descRating}>убыванию рейтинга</span>
          </div>
        </div>
      )}
    </div>
  );
};
