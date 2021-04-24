import { AgentServiceApiFactory } from 'webitel-sdk';
import instance from '../../../_install/options/instance';
import openAPIConfig from '../../../_install/options/openAPIConfig';

let apiService;
const createApiService = () => apiService = new AgentServiceApiFactory(openAPIConfig.get(), '', instance.get());

export const patchAgentStatus = async ({ agentId, status, pauseCause }) => {
  if (!apiService) createApiService();
  try {
    const res = await apiService.updateAgentStatus(agentId, {
      status,
      id: agentId,
      payload: pauseCause,
    }, undefined);
    return { success: !!res };
  } catch (err) {
    throw err;
  }
};

export default {
  patch: patchAgentStatus,
};
