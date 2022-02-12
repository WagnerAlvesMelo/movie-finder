import React, { FormEvent, useEffect } from 'react'

import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'

import TextField from '../../UI/Input'

import Logo from '../../../assets/icons/logo.svg'

import * as S from './styles'
import useMovies from '../../../contexts/movies'

type MovieSearchBarProps = {
  findMovies: (query?: string) => Promise<void>
  onChange: (query: string) => void
  value: string
  pathname?: (path: string) => void
}

export default function MovieSearchBar({
  findMovies,
  onChange,
  value,
  pathname,
}: MovieSearchBarProps) {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const location = useLocation()
  const movies = useMovies()

  const param = params.get('q')

  useEffect(() => {
    if (param) {
      window.scrollTo(0, 0)
      movies.changeQuery(param)
      findMovies(param)
    }
  }, [location.pathname, param])

  useEffect(() => {
    pathname?.(location.pathname)
  }, [location.pathname])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await findMovies()
    if (param !== value) {
      navigate(`movies?q=${value}`)
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit} toTop={location.pathname !== '/'}>
      <S.LogoWrapper
        src={Logo}
        alt='Movie Finder'
        width={location.pathname === '/' ? '580px' : '180px'}
        onClick={() => navigate('/')}
      />
      <TextField
        placeholder='Procure seu Filme'
        onChange={(e) => onChange(e.target.value)}
        value={movies.state.query}
      />
      <div />
    </S.Wrapper>
  )
}
