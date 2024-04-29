import { Game, SearchGameParams, TableGameParams } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGames = createAsyncThunk<Game[], SearchGameParams>(
  'game/fetchGamesStatus',
  async (params) => {
    const { sortBy, order, PCavailable, PSavailable, Xboxavailable } = params;
    const { data } = await axios.get<Game[]>(
      `https://662e4e35a7dda1fa378c9a52.mockapi.io/games?PCavailable=${PCavailable}&PSavailable=${PSavailable}&Xboxavailable=${Xboxavailable}&sortBy=${sortBy}&order=${order}`,
    );

    return data;
  },
);

export const fetchTableGames = createAsyncThunk<Game[], TableGameParams>(
  'game/fetchTableGamesStatus',
  async (params) => {
    const { RusAudio, RusSubtitles, sortBy, order } = params;
    const { data } = await axios.get<Game[]>(
      `https://662e4e35a7dda1fa378c9a52.mockapi.io/games?RusAudio=${RusAudio}&RusSubtitles=${RusSubtitles}&sortBy=${sortBy}&order=${order}`,
    );

    return data;
  },
);
