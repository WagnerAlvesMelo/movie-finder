import MovieServiceContext from '../../../../../presentation/contexts/services/movie'
import MovieRepository from '../../../../../repository/repositories/movie/movie-repository'
import RemoteGetMovieDetails from '../../../../../service/usecases/movie/get-movie-details/get-movie-details'
import RemoteGetMovies from '../../../../../service/usecases/movie/get-movies/get-movies'
import makeApiRepository from '../../../api/api-repository'

export default function makeMovieService() {
  const movieRepository = new MovieRepository(makeApiRepository())

  const getMovies = new RemoteGetMovies(movieRepository)
  const getMovieDetails = new RemoteGetMovieDetails(movieRepository)

  return new MovieServiceContext({
    getMovies,
    getMovieDetails,
  })
}
