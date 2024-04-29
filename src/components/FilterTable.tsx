import { selectFilter, setRusAudio, setRusSubtitles } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';

type FilterTableType = {
  open: boolean;
};

export const FilterTable = ({ open }: FilterTableType) => {
  const dispatch = useAppDispatch();

  const { RusAudio, RusSubtitles } = useSelector(selectFilter);

  // Чтобы не было конфликтов у TypeScript при передачи checked в input
  const checkedAudio = RusAudio ? true : false;
  const checkedSubs = RusSubtitles ? true : false;

  // Чтобы сервер правильно все возвращал при отсутствии галочки на checkbox пришлось сделать так
  const checkAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) {
      dispatch(setRusAudio(''));
    } else dispatch(setRusAudio(e.target.checked));
  };

  const checkSubs = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) {
      dispatch(setRusSubtitles(''));
    } else dispatch(setRusSubtitles(e.target.checked));
  };

  return (
    <>
      {open && (
        <form className="filter-block">
          <input
            type="checkbox"
            id="option1"
            name="Audio"
            value="Audio"
            onChange={checkAudio}
            checked={checkedAudio}
          />
          <label htmlFor="option1">Есть русская озвучка</label>
          <br />
          <input
            type="checkbox"
            id="option2"
            name="Subtitles"
            value="Subtitles"
            onChange={checkSubs}
            checked={checkedSubs}
          />
          <label htmlFor="option2">Есть русские субтитры</label>
        </form>
      )}
    </>
  );
};
