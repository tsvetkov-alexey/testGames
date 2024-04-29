import { RootState } from '../store';
import {
  FilterSliceState,
  SortItem,
  SortItem0ffline,
  SortItem0nline,
  sortPropertyEnum,
  sortPropertyOffline,
  sortPropertyOnline,
} from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: FilterSliceState = {
  sortedGames: {
    sortName: 'умолчанию',
    sortProperty: sortPropertyEnum.RATING_DEFAULT,
  },
  sortedOnlineGames: {
    sortName: 'умолчанию',
    sortProperty: sortPropertyOnline.ONLINE_DEFAULT,
  },
  sortedOfflineGames: {
    sortName: 'умолчанию',
    sortProperty: sortPropertyOffline.OFFLINE_DEFAULT,
  },
  PCavailable: '',
  PSavailable: '',
  Xboxavailable: '',
  RusAudio: '',
  RusSubtitles: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<SortItem>) {
      state.sortedGames = action.payload;
    },
    setPC(state, action: PayloadAction<string | boolean>) {
      state.PCavailable = action.payload;
    },
    setPS(state, action: PayloadAction<string | boolean>) {
      state.PSavailable = action.payload;
    },
    setXbox(state, action: PayloadAction<string | boolean>) {
      state.Xboxavailable = action.payload;
    },
    setRusAudio(state, action: PayloadAction<string | boolean>) {
      state.RusAudio = action.payload;
    },
    setRusSubtitles(state, action: PayloadAction<string | boolean>) {
      state.RusSubtitles = action.payload;
    },
    setSortedOnline(state, action: PayloadAction<SortItem0nline>) {
      state.sortedOnlineGames = action.payload;
    },
    setSortedOffline(state, action: PayloadAction<SortItem0ffline>) {
      state.sortedOfflineGames = action.payload;
    },
  },
});

export const {
  setSort,
  setPC,
  setPS,
  setXbox,
  setRusAudio,
  setRusSubtitles,
  setSortedOnline,
  setSortedOffline,
} = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;

export const selectSort = (state: RootState) => state.filter.sortedGames;
export const selectSortedOnline = (state: RootState) => state.filter.sortedOnlineGames;
export const selectSortedOffline = (state: RootState) => state.filter.sortedOfflineGames;

export default filterSlice.reducer;
