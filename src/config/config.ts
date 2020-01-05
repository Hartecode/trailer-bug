export const movieDBConfig: MovieDB = {
    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDMxMDg3YzNhYzYxNjMzNDQ2MWRmOGZiODcwY2NjMCIsInN1YiI6IjU3ZTFlZDdmOTI1MTQxMTUwNjAwNDdkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wpdbXDvL0MaKMIn3FFsAT_XZ-L8ihF8pnq23Fo1yxME',
    image: (pxWidth: number, dbImage: string) => `https://image.tmdb.org/t/p/w${pxWidth}${dbImage}`,
    baseApi: `https://api.themoviedb.org`,
    movie: (id: string) => `${movieDBConfig.baseApi}/3/movie/${id}`,
    video: (movieId: string) => `${movieDBConfig.baseApi}/movie/${movieId}/videos`,
    youTube: (key: string) => `https://youtu.be/${key}`,
    discover: `/3/discover`
};

export const test = movieDBConfig.movie.bind(movieDBConfig);

interface MovieDB {
    accessToken: string;
    image: (pxWidth: number, dbImage: string) => string;
    baseApi: string;
    movie: (id: string) => string;
    video: (movieId: string) => string;
    youTube: (key: string) => string;
    discover: string;
}
