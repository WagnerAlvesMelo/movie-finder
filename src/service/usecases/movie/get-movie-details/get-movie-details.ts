import { GetMovieDetails } from '../../../../domain/usecases/movie/get-movie-details'
import MovieRepository from '../../../../repository/repositories/movie/movie-repository'

export default class RemoteGetMovieDetails implements GetMovieDetails {
  constructor(private readonly movieRepository: MovieRepository) {}

  async load(params: GetMovieDetails.Params): Promise<GetMovieDetails.Model> {
    return this.movieRepository.getMovieDetails(params)
  }
}
