import { gameApi } from '../services/GameService';
import filter from './filter/slice';
import games from './games/slice';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { filter, games, [gameApi.reducerPath]: gameApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
