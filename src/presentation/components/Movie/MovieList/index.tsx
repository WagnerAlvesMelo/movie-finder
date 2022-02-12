import React from 'react'

import { Grid, Typography } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import Movie from '../../../../domain/models/movie/movie'
import MovieCard from '../MovieCard'
import useMovies from '../../../contexts/movies'

type MovieListProps = {
  movies: Movie[]
  fetchData: () => void
  totalResults: number
}

export default function MovieList({
  movies,
  totalResults,
  fetchData,
}: MovieListProps) {
  const moviesCtx = useMovies()
  if (movies.length === 0 && !moviesCtx.state.isLoading) {
    return (
      <Typography component='legend' fontSize='22px'>
        Nenhum filme a ser exibido
      </Typography>
    )
  }
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchData}
      hasMore={totalResults > movies.length}
      loader={<div />}
    >
      <Grid container spacing={2}>
        {movies.map((movie: Movie, idx) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs={6} sm={6} md={4} key={movie.props.imdbID + idx}>
              <MovieCard movie={movie} />
            </Grid>
          )
        })}
      </Grid>
    </InfiniteScroll>
  )
}
