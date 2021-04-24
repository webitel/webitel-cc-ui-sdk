import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../_install/options/instance';
import openAPIConfig from '../../../_install/options/openAPIConfig';

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
  apiService = new AgentServiceApiFactory(openAPIConfig.get(), '', instance.get());
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
