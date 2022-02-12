import Movie from '../../models/movie/movie'

export interface GetMovieDetails {
  load: (params: GetMovieDetails.Params) => Promise<GetMovieDetails.Model>
}

export namespace GetMovieDetails {
  export type Params = {
    id: string
  }

  export type Model = Movie
}
