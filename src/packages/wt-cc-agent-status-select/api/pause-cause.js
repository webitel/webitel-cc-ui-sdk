import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import installOptionsRepository from '../../../_install/InstallOptionsRepository';

const _getAgentPauseCauses = (getList) => function ({
                                                      agentId,
                                                    } = {}) {
  const allowChange = true;
  const params = [agentId, allowChange];
  return getList(params);
};

const defaultListObject = {
  name: '',
  durationMin: 0,
  limitMin: 0,
};

let apiService;
let listGetter;

const createApiService = () => {
  apiService = new AgentServiceApiFactory(
    installOptionsRepository.get('openAPIConfig'),
    '',
    installOptionsRepository.get('instance'),
  );
  listGetter = new SdkListGetterApiConsumer(apiService.searchPauseCauseForAgent,
    { defaultListObject })
    .setGetListMethod(_getAgentPauseCauses);
}

export const getAgentPauseCauses = (params) => {
  if (!apiService) createApiService();
  return listGetter.getList(params);
}

export default {
  getList: getAgentPauseCauses,
};
