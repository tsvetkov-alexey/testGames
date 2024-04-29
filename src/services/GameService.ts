import { Game } from '../redux/games/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://662e4e35a7dda1fa378c9a52.mockapi.io' }),
  endpoints: (build) => ({
    fetchGameById: build.query<Game, string>({
      query: (id) => ({
        url: `games/${id}`,
      }),
    }),
  }),
});
