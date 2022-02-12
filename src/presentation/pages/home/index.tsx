import React from 'react'

import { useLocation } from 'react-router-dom'

import MovieList from '../../components/Movie/MovieList'
import Container from '../../components/UI/Container'
import HomeBg from '../../assets/backgrounds/Home-Bg.png'
import useMovies from '../../contexts/movies'

export default function Home() {
  const location = useLocation()
  const movies = useMovies()

  return (
    <Container
      style={{
        backgroundImage: `${
          location.pathname === '/' ? `url(${HomeBg}),` : ''
        } linear-gradient(180deg, #000000 48.91%, #891a10 100%)`,
      }}
    >
      <MovieList
        movies={movies.state.movies}
        fetchData={() => movies.findMovies(false, movies.state.page)}
        totalResults={movies.state.totalResults}
      />
    </Container>
  )
}
