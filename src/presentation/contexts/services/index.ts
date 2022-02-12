import React from 'react'
import makeMovieService from '../../../main/factories/stores/services/movie'

const services = {
  movie: makeMovieService(),
}

export const servicesContext = React.createContext(services)

export type ServicesType = Partial<typeof services>
