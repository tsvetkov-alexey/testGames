export type Game = {
  id: string;
  title: string;
  imageUrl: string;
  releaseDate: string;
  genre: string;
  description: string;
  ageRate: number;
  rating: number;
  maxOnline: number;
  maxOffline: number;
  PCavailable: boolean;
  PSavailable: boolean;
  Xboxavailable: boolean;
  RusSubtitles: boolean;
  RusAudio: boolean;
  availableOn: string;
};

export type SearchGameParams = {
  PCavailable: string | boolean;
  PSavailable: string | boolean;
  Xboxavailable: string | boolean;
  sortBy: string;
  order: string;
};

export type TableGameParams = {
  RusAudio: string | boolean;
  RusSubtitles: string | boolean;
  sortBy: string;
  order: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'successs',
  ERROR = 'error',
}

export interface GameSliceState {
  items: Game[];
  tableGames: Game[];
  status: Status;
}
