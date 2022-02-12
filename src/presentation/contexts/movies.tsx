import React, { useMemo, useState } from 'react'
import Movie from '../../domain/models/movie/movie'
import useServices from '../hooks/useServices'

type MovieContext = {
  state: {
    page: number
    movies: Movie[]
    totalResults: number
    query: string
    isLoading: boolean
  }
  findMovies: (
    reset: boolean,
    actualPage: number,
    query?: string
  ) => Promise<void>
  changeQuery: (query: string) => void
}

export const MoviesContext = React.createContext<MovieContext>({
  changeQuery: async () => undefined,
  findMovies: async () => undefined,
  state: {
    movies: [],
    page: 1,
    query: '',
    totalResults: 0,
    isLoading: false,
  },
})

export function MoviesProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState<number>(0)
  const [totalResults, setTotalResults] = useState(0)
  const [query, setQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cachedItems, setCachedItems] = useState<Movie[]>([])
  const movieService = useServices().movie

  async function findMovies(
    reset: boolean,
    actualPage: number,
    queryParam?: string
  ) {
    try {
      if (reset) {
        setIsLoading(true)
        setMovies([])
      }
      if (
        !reset &&
        totalResults &&
        movies.length + cachedItems.length === totalResults
      ) {
        setMovies([...movies, ...cachedItems.splice(0, 6)])
        return
      }

      const gettedMovies = await movieService.getMovies({
        name: queryParam?.trim() || query.trim(),
        page: reset ? 1 : actualPage + 1,
      })

      // Parte necessária pois o retorno tem que ser de 6 em 6 mas a API retorna de 10 em 10
      const responseSize = gettedMovies.Search.length
      const isBiggerThanSix = responseSize >= 6
      const getFromArray = isBiggerThanSix ? 6 : responseSize

      if (reset) {
        window.scrollTo(0, 0)
        setPage(1)
        setMovies(gettedMovies.Search.slice(0, getFromArray))
        setCachedItems(gettedMovies.Search.slice(getFromArray, responseSize))
      } else {
        const moviesToCache =
          cachedItems.length >= 6
            ? 10
            : gettedMovies.Search.length + cachedItems.length - 6
        if (moviesToCache === 10) {
          const cacheToMovies = cachedItems.splice(0, 6)
          const cachedMovies = [...cachedItems, ...gettedMovies.Search]
          setMovies([...movies, ...cacheToMovies])
          setCachedItems(cachedMovies)
        } else {
          const newItems = gettedMovies.Search.slice(0, 10 - moviesToCache)
          const cacheToMovies = [...cachedItems.slice(0, 6), ...newItems]
          setCachedItems(gettedMovies.Search.slice(10 - moviesToCache, 10))
          setMovies([...movies, ...cacheToMovies])
        }
        setPage(actualPage + 1)
      }
      setTotalResults(Number(gettedMovies.totalResults))
    } catch (error) {
      throw new Error()
    } finally {
      setIsLoading(false)
    }
  }

  const changeQuery = (queryText: string) => {
    setQuery(queryText)
  }

  const providerValues = useMemo(() => {
    return {
      state: {
        query,
        movies,
        page,
        totalResults,
        isLoading,
      },
      findMovies,
      changeQuery,
    }
  }, [query, movies, page, totalResults, isLoading, findMovies, changeQuery])

  return (
    <MoviesContext.Provider value={providerValues}>
      {children}
    </MoviesContext.Provider>
  )
}

function useMovies(): MovieContext {
  if (MoviesContext) {
    return React.useContext(MoviesContext)
  }
  return React.useContext(MoviesContext)
}

export default useMovies
