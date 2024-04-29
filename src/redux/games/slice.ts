import { RootState } from '../store';
import { fetchGames, fetchTableGames } from './asyncAction';
import { GameSliceState, Status } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: GameSliceState = {
  items: [],
  tableGames: [],
  status: Status.LOADING, // loading | success | error
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
      if (action.payload.length === 0) state.status = Status.ERROR;
    });
    builder.addCase(fetchGames.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(fetchTableGames.pending, (state) => {
      state.status = Status.LOADING;
      state.tableGames = [];
    });
    builder.addCase(fetchTableGames.fulfilled, (state, action) => {
      state.tableGames = action.payload;
      state.status = Status.SUCCESS;
      if (action.payload.length === 0) state.status = Status.ERROR;
    });
    builder.addCase(fetchTableGames.rejected, (state) => {
      state.status = Status.ERROR;
      state.tableGames = [];
    });
  },
});

export const selectGame = (state: RootState) => state.games;

export default gameSlice.reducer;
