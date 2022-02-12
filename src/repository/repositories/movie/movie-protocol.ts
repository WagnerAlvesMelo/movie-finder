import { GetMovieDetails } from '../../../domain/usecases/movie/get-movie-details'
import { GetMovies } from '../../../domain/usecases/movie/get-movies'

export interface MovieRepositoryProtocol {
  getMovies(params: GetMovies.Params): Promise<GetMovies.Model>
  getMovieDetails(
    params: GetMovieDetails.Params
  ): Promise<GetMovieDetails.Model>
}
