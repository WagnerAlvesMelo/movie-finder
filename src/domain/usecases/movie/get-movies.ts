import Movie from '../../models/movie/movie'

export interface GetMovies {
  load: (params: GetMovies.Params) => Promise<GetMovies.Model>
}

export namespace GetMovies {
  export type Params = {
    name: string
    page: number
  }

  export type Model = { Search: Movie[]; totalResults: string }
}
