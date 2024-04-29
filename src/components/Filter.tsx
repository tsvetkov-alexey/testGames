import filter from '../assets/svg/filter.svg';
import { selectFilter, setPC, setPS, setXbox } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { PopupClick } from './Sort';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const filterRef = useRef<HTMLDivElement>(null);

  const { PCavailable, PSavailable, Xboxavailable } = useSelector(selectFilter);

  // Чтобы не было конфликтов у TypeScript при передачи checked в input
  const checkedPC = PCavailable ? true : false;
  const checkedPS = PSavailable ? true : false;
  const checkedXbox = Xboxavailable ? true : false;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (filterRef.current && !_e.composedPath().includes(filterRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  // Чтобы сервер правильно все возвращал при отсутствии галочки на checkbox пришлось сделать так
  const checkPC = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) {
      dispatch(setPC(''));
    } else dispatch(setPC(e.target.checked));
  };

  const checkPS = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) {
      dispatch(setPS(''));
    } else dispatch(setPS(e.target.checked));
  };

  const checkXbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) {
      dispatch(setXbox(''));
    } else dispatch(setXbox(e.target.checked));
  };

  return (
    <div className="filter" ref={filterRef}>
      <img src={filter} alt="filter" />
      <span onClick={() => setOpen(!open)}>Фильтровать по</span>
      {open && (
        <form className="filter-block">
          <input
            type="checkbox"
            id="option1"
            name="PC"
            value="PC"
            onChange={checkPC}
            checked={checkedPC}
          />
          <label htmlFor="option1">Есть на PC</label>
          <br />
          <input
            type="checkbox"
            id="option2"
            name="PS"
            value="PS"
            onChange={checkPS}
            checked={checkedPS}
          />
          <label htmlFor="option2">Есть на PlayStation</label>
          <br />
          <input
            type="checkbox"
            id="option3"
            name="Xbox"
            value="Xbox"
            onChange={checkXbox}
            checked={checkedXbox}
          />
          <label htmlFor="option3">Есть на Xbox</label>
        </form>
      )}
    </div>
  );
};
