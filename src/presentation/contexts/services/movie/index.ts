import { GetMovieDetails } from '../../../../domain/usecases/movie/get-movie-details'
import { GetMovies } from '../../../../domain/usecases/movie/get-movies'

type Services = {
  getMovies: GetMovies
  getMovieDetails: GetMovieDetails
}

export default class MovieService {
  constructor(private readonly services: Services) {}

  getMovies(params: GetMovies.Params): Promise<GetMovies.Model> {
    return this.services.getMovies.load(params)
  }

  getMovieDetails(
    params: GetMovieDetails.Params
  ): Promise<GetMovieDetails.Model> {
    return this.services.getMovieDetails.load(params)
  }
}
