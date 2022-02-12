import ApiClientImplementation from '../../../infra/api-client/api-client'
import ApiRepository from '../../../repository/api-repository'
import ApiRequestDecorator from '../../decorators/api-request-decorator'

export default function makeApiRepository() {
  const apiRepository = new ApiRepository(new ApiClientImplementation())
  return new ApiRequestDecorator(apiRepository)
}
