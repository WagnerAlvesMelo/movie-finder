import ApiRepository from '../../repository/api-repository'
import { ApiResponse } from '../../service/protocols/api/api-client'
import {
  IApiRepository,
  RepositoryRequest,
} from '../../service/protocols/api/api-repository'

export default class ApiRequestDecorator implements IApiRepository {
  constructor(private readonly apiRepository: ApiRepository) {}

  async get(data: RepositoryRequest): Promise<ApiResponse> {
    const newData: RepositoryRequest = {
      ...data,
      url: `${data.url}&apikey=67c1297f`,
    }
    return this.apiRepository.get(newData)
  }
}
