import React, { useEffect, useState } from 'react'

import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import useMovies from '../../contexts/movies'

import Home from '../../pages/home'
import MovieDetails from '../../pages/movie-details'
import MovieSearchBar from '../Movie/MovieSearchBar'

import * as S from './styles'
import Loading from '../UI/Loading'

export default function MainLayout() {
  const movies = useMovies()
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return (
    <S.Wrapper location={path}>
      {movies.state.isLoading && <Loading />}
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <MovieSearchBar
                  onChange={movies.changeQuery}
                  findMovies={(query?: string) =>
                    movies.findMovies(true, movies.state.page, query)
                  }
                  value={movies.state.query}
                  pathname={setPath}
                />
                <Outlet />
              </>
            }
          >
            <Route path='movies' element={<Home />} />
            <Route path='movie-detail' element={<MovieDetails />} />
          </Route>
        </Routes>
      </Router>
    </S.Wrapper>
  )
}
