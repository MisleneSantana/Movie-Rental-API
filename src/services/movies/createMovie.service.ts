import { TMovieCreate, TMovieRepo } from '../../interfaces/movie.interfaces';
import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';

export const createMovieService = async (movieData: TMovieCreate): Promise<Movie> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie = movieRepo.create(movieData);

  await movieRepo.save(movie);

  return movie;
};

