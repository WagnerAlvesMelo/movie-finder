import React from 'react'
import { servicesContext } from '../contexts/services'

const useServices = () => React.useContext(servicesContext)

export default useServices
