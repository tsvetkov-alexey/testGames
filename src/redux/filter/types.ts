export enum sortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASK = '-rating',
  RATING_DEFAULT = '',
}

export enum sortPropertyOnline {
  ONLINE_DESC = 'online',
  ONLINE_ASK = '-online',
  ONLINE_DEFAULT = '',
}

export enum sortPropertyOffline {
  OFFLINE_DESC = 'offline',
  OFFLINE_ASK = '-offline',
  OFFLINE_DEFAULT = '',
}

export type SortItem = {
  sortName: string;
  sortProperty: sortPropertyEnum;
};

export type SortItem0nline = {
  sortName: string;
  sortProperty: sortPropertyOnline;
};

export type SortItem0ffline = {
  sortName: string;
  sortProperty: sortPropertyOffline;
};

export interface FilterSliceState {
  sortedGames: SortItem;
  sortedOnlineGames: SortItem0nline;
  sortedOfflineGames: SortItem0ffline;
  PCavailable: string | boolean;
  PSavailable: string | boolean;
  Xboxavailable: string | boolean;
  RusAudio: string | boolean;
  RusSubtitles: string | boolean;
}
