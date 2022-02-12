import Movie, { MovieAttributes } from '../../../domain/models/movie/movie'
import { GetMovieDetails } from '../../../domain/usecases/movie/get-movie-details'
import { GetMovies } from '../../../domain/usecases/movie/get-movies'
import { ApiStatusCode } from '../../../service/protocols/api/api-client'
import { IApiRepository } from '../../../service/protocols/api/api-repository'
import { MovieRepositoryProtocol } from './movie-protocol'

export default class MovieRepository implements MovieRepositoryProtocol {
  constructor(private readonly apiRepository: IApiRepository) {}

  async getMovieDetails(
    params: GetMovieDetails.Params
  ): Promise<GetMovieDetails.Model> {
    const { apiRepository } = this

    const httpResponse = await apiRepository.get({
      url: `https://omdbapi.com/?i=${params.id}`,
    })

    if (
      httpResponse.statusCode &&
      httpResponse.statusCode !== ApiStatusCode.ok
    ) {
      throw new Error('Erro no servidor ao buscar os detalhes do filme')
    } else {
      return new Movie(httpResponse.body)
    }
  }

  async getMovies(params: GetMovies.Params): Promise<GetMovies.Model> {
    const { apiRepository } = this

    const httpResponse = await apiRepository.get({
      url: `https://omdbapi.com/?s=${params.name}&page=${params.page}`,
    })

    if (
      httpResponse.statusCode &&
      httpResponse.statusCode !== ApiStatusCode.ok
    ) {
      throw new Error('Erro no servidor ao buscar os filmes')
    } else {
      httpResponse.body.Search = httpResponse.body.Search.map(
        (movie: MovieAttributes) => {
          return new Movie(movie)
        }
      )
      return httpResponse.body
    }
  }
}
