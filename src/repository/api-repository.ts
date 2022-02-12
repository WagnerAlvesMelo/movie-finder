import {
  ApiClient,
  ApiResponse,
  ApiMethod,
} from '../service/protocols/api/api-client'
import {
  IApiRepository,
  RepositoryRequest,
} from '../service/protocols/api/api-repository'

export default class ApiRepository<Model = any>
  implements IApiRepository<Model>
{
  constructor(private readonly apiClient: ApiClient<Model>) {}

  async get(data: RepositoryRequest): Promise<ApiResponse<Model>> {
    return this.apiClient.request({
      ...data,
      method: ApiMethod.GET,
    })
  }
}
