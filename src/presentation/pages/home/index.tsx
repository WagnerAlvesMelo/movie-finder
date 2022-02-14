import React, { useEffect } from 'react'

import MovieList from '../../components/Movie/MovieList'
import Container from '../../components/UI/Container'
import useMovies from '../../contexts/movies'

export default function Home() {
  const movies = useMovies()

  useEffect(() => {
    return () => {
      movies.resetPage()
    }
  }, [])

  return (
    <Container>
      <MovieList
        movies={movies.state.movies}
        fetchData={() => movies.findMovies(false, movies.state.page)}
        totalResults={movies.state.totalResults}
      />
    </Container>
  )
}
