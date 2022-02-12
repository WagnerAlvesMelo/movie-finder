import { ApiResponse } from './api-client'

export type RepositoryRequest = {
  url: string
  body?: any
  query?: string
  headers?: any
}

export interface IApiRepository<R = any> {
  get: (data: RepositoryRequest) => Promise<ApiResponse<R>>
}
