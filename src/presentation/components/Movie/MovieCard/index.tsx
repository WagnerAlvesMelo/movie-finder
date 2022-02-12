import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Movie from '../../../../domain/models/movie/movie'
import useOutsideTouch from '../../../hooks/useOutsideTouch'
import Button from '../../UI/Button'

type MovieCardProps = {
  movie: Movie
  noOverlay?: boolean
  showPlot?: boolean
}

export default function MovieCard({
  movie,
  noOverlay,
  showPlot,
}: MovieCardProps) {
  const [show, setShow] = useState(false)
  const [showOverlay, setShowOverlay] = useState<boolean>(false)
  const navigate = useNavigate()
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!show) setShow(true)
  }, [])

  const handleMouseIn = () => {
    setShowOverlay(true)
  }

  const handleMouseOut = () => {
    setShowOverlay(false)
  }

  useOutsideTouch(wrapperRef, handleMouseOut)

  return (
    <S.Wrapper ref={wrapperRef} onMouseLeave={handleMouseOut}>
      {showOverlay && !noOverlay && (
        <S.Overlay>
          <S.OverlayContent>
            <S.MovieOverview>
              <h3>Título</h3>
              <span> {movie.props.Title}</span>
            </S.MovieOverview>
            <S.MovieOverview>
              <h3>Ano</h3>
              <span> {movie.props.Year}</span>
            </S.MovieOverview>
            <S.MovieOverview>
              <h3>Tipo</h3>
              <span> {movie.props.Type}</span>
            </S.MovieOverview>
            <S.MovieOverview>
              <h3>IMDB ID</h3>
              <span> {movie.props.imdbID}</span>
            </S.MovieOverview>
          </S.OverlayContent>
          <Button
            style={{ marginTop: '10px' }}
            variant='contained'
            onClick={() =>
              navigate('/movie-detail', {
                state: {
                  movieId: movie.props.imdbID,
                },
              })
            }
          >
            + INFO
          </Button>
        </S.Overlay>
      )}
      <S.MovieImage
        src={movie.props.Poster}
        alt={`Poster do filme ${movie.props.Title}`}
        onMouseEnter={handleMouseIn}
        onTouchStart={handleMouseIn}
      />
      {showPlot && (
        <S.Overlay style={{ overflowY: 'auto' }}>
          <S.OverlayContent>{movie.props.Plot}</S.OverlayContent>
        </S.Overlay>
      )}
    </S.Wrapper>
  )
}
