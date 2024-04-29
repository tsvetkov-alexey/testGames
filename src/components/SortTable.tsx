import arrow from '../assets/svg/arrow.svg';
import def from '../assets/svg/default.svg';
import { setSortedOnline } from '../redux/filter/slice';
import { SortItem0nline, sortPropertyOnline } from '../redux/filter/types';
import { useAppDispatch } from '../redux/store';

export type PopupClick = MouseEvent & {
  composedPath(): Node[];
};

const list: SortItem0nline[] = [
  { sortName: 'умолчанию', sortProperty: sortPropertyOnline.ONLINE_DEFAULT },
  { sortName: 'возрастанию онлайна', sortProperty: sortPropertyOnline.ONLINE_ASK },
  { sortName: 'убыванию онлайна', sortProperty: sortPropertyOnline.ONLINE_DESC },
];

type SortTableType = {
  open: boolean;
  setOpen: (a: boolean) => void;
};

export const SortTable = ({ open, setOpen }: SortTableType) => {
  const dispatch = useAppDispatch();
  console.log(open);

  const defaultSelected = () => {
    dispatch(setSortedOnline(list[0]));
    setOpen(false);
  };

  const ascOnline = () => {
    dispatch(setSortedOnline(list[1]));
    setOpen(false);
  };

  const descOnline = () => {
    dispatch(setSortedOnline(list[2]));
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="sort-block">
          <div className="default">
            <img src={def} alt="default" />
            <span onClick={defaultSelected}>умолчанию</span>
          </div>
          <div className="rating-asc-block">
            <img src={arrow} alt="arrowUp" />
            <span onClick={ascOnline}>возрастанию онлайна</span>
          </div>
          <div className="rating-desc-block">
            <img src={arrow} alt="arrowDown" />
            <span onClick={descOnline}>убыванию онлайна</span>
          </div>
        </div>
      )}
    </>
  );
};
