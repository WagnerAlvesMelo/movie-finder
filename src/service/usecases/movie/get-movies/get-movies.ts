import { GetMovies } from '../../../../domain/usecases/movie/get-movies'
import MovieRepository from '../../../../repository/repositories/movie/movie-repository'

export default class RemoteGetMovies implements GetMovies {
  constructor(private readonly movieRepository: MovieRepository) {}

  async load(params: GetMovies.Params): Promise<GetMovies.Model> {
    return this.movieRepository.getMovies(params)
  }
}
