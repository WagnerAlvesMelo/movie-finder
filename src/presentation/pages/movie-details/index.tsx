import { Grid, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Movie from '../../../domain/models/movie/movie'
import MovieCard from '../../components/Movie/MovieCard'
import Container from '../../components/UI/Container'
import useServices from '../../hooks/useServices'

export default function MovieDetails() {
  const [movie, setMovie] = useState<Movie>()
  const movieService = useServices().movie
  const location = useLocation()
  const state = location.state as { movieId: string }
  const navigate = useNavigate()

  useEffect(() => {
    ;(() => {
      movieService
        .getMovieDetails({
          id: state.movieId,
        })
        .then((res) => setMovie(res))
    })()
  }, [])

  if (!movie) {
    return (
      <Container style={{ backgroundColor: 'black' }}>
        <div />
      </Container>
    )
  }

  const makeInfo = [
    {
      label: 'Classificação',
      value: movie.props.Rated,
    },
    { label: 'Data de lançamento', value: movie.props.Released },

    { label: 'Gênero', value: movie.props.Genre },

    { label: 'Diretor', value: movie.props.Director },

    { label: 'Roteirista', value: movie.props.Writer },

    { label: 'Atores', value: movie.props.Actors },

    { label: 'Idioma', value: movie.props.Language },

    { label: 'País', value: movie.props.Country },

    { label: 'Prêmios', value: movie.props.Awards },
  ]

  return (
    <Container style={{ backgroundColor: 'black' }}>
      <Grid
        style={{ display: 'flex', cursor: 'pointer' }}
        alignItems='center'
        onClick={() => navigate(-1)}
      >
        <Typography component='legend' fontSize='40px' marginRight='10px'>
          &laquo;
        </Typography>
        <h1>
          {movie.props.Title} ({movie.props.Year})
        </h1>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4} marginTop='24px'>
          <MovieCard movie={movie} noOverlay showPlot />
        </Grid>

        <Grid item md={8}>
          <Grid container>
            <Grid item xs={12} md={6} margin='20px 0'>
              <Typography component='legend' fontSize='22px'>
                Avaliação IMDB ({movie.props.imdbVotes})
              </Typography>
              <Rating
                name='read-only'
                value={Number(movie.props.imdbRating)}
                max={10}
                precision={0.1}
                readOnly
              />
            </Grid>

            <Grid item xs={12} md={6} margin='20px 0'>
              <Typography component='legend' fontSize='22px'>
                Metascore
              </Typography>
              <Typography component='legend' fontSize='18px'>
                {movie.props.Metascore}/100
              </Typography>
            </Grid>

            {movie &&
              makeInfo.map((info) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    alignContent='flex-end'
                    margin='0 0 12px 0'
                  >
                    <Typography
                      fontSize='18px'
                      component='legend'
                      color='#D93223'
                    >
                      {info.label}
                    </Typography>
                    <Typography fontSize='14px'>{info.value}</Typography>
                  </Grid>
                )
              })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
