import React from 'react'
import MainLayout from './presentation/components/Layouts'
import { MoviesProvider } from './presentation/contexts/movies'
import GlobalStyle from './presentation/styles/global'

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <MoviesProvider>
        <MainLayout />
      </MoviesProvider>
    </div>
  )
}

export default App
