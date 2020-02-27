export const movieDBConfig: MovieDB = {
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDMxMDg3YzNhYzYxNjMzNDQ2MWRmOGZiODcwY2NjMCIsInN1YiI6IjU3ZTFlZDdmOTI1MTQxMTUwNjAwNDdkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wpdbXDvL0MaKMIn3FFsAT_XZ-L8ihF8pnq23Fo1yxME',
  image: (pxWidth: number, dbImage: string) =>
    `https://image.tmdb.org/t/p/w${pxWidth}${dbImage}`,
  fullImage: (dbImage: string) =>
    `https://image.tmdb.org/t/p/original${dbImage}`,
  baseApi: `https://api.themoviedb.org`,
  movie: (id: string) => `${movieDBConfig.baseApi}/3/movie/${id}`,
  movieVideo: (movieId: string) =>
    `${movieDBConfig.baseApi}/3/movie/${movieId}/videos`,
  tvVideo: (movieId: string) =>
    `${movieDBConfig.baseApi}/3/tv/${movieId}/videos`,
  mediaFullInfo: (media: 'tv' | 'movie', key: string) =>
    `https://api.themoviedb.org/3/${media}/${key}`,
  youTube: (key: string) => `https://www.youtube.com/embed/${key}`,
  youTubeThumbnail: {
    default: (key: string) => `https://img.youtube.com/vi/${key}/default.jpg`,
    smallDefault: (key: string) =>
      `https://img.youtube.com/vi/${key}/sddefault.jpg`
  },
  // Vimeo info : https://vimeo.zendesk.com/hc/en-us/articles/115004485728-Autoplaying-and-looping-embedded-videos
  vimeo: (key: string) => `https://player.vimeo.com/video/${key}`,
  discover: () => `${movieDBConfig.baseApi}/3/discover`,
  trending: () => `${movieDBConfig.baseApi}/3/trending`,
  search: (val: string, pageNum: number = 1) =>
    `${movieDBConfig.baseApi}/3/search/multi?language=en-US&query=${val}&page=${pageNum}&include_adult=false`
};

export interface MovieDB {
  accessToken: string;
  image: (pxWidth: number, dbImage: string) => string;
  fullImage: (dbImage: string) => string;
  baseApi: string;
  movie: (id: string) => string;
  movieVideo: (movieId: string) => string;
  tvVideo: (movieId: string) => string;
  mediaFullInfo: (media: 'tv' | 'movie', key: string) => string;
  youTube: KeyFunction;
  youTubeThumbnail: {
    default: KeyFunction;
    smallDefault: KeyFunction;
  };
  vimeo: KeyFunction;
  discover: () => string;
  trending: () => string;
  search: (val: string, pageNum: number) => string;
}

export type KeyFunction = (key: string) => string;
