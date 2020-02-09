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
  youTube: (key: string) => `https://www.youtube.com/embed/${key}`,
  // Vimeo info : https://vimeo.zendesk.com/hc/en-us/articles/115004485728-Autoplaying-and-looping-embedded-videos
  vimeo: (key: string) => `https://player.vimeo.com/video/${key}`,
  discover: () => `${movieDBConfig.baseApi}/3/discover`,
  trending: () => `${movieDBConfig.baseApi}/3/trending`
};

export interface MovieDB {
  accessToken: string;
  image: (pxWidth: number, dbImage: string) => string;
  fullImage: (dbImage: string) => string;
  baseApi: string;
  movie: (id: string) => string;
  movieVideo: (movieId: string) => string;
  tvVideo: (movieId: string) => string;
  youTube: (key: string) => string;
  vimeo: (key: string) => string;
  discover: () => string;
  trending: () => string;
}
