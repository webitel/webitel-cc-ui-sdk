import { AgentServiceApiFactory } from 'webitel-sdk';
import installOptionsRepository from '../../../_install/InstallOptionsRepository';

let apiService;

const createApiService = () => apiService = new AgentServiceApiFactory(
  installOptionsRepository.get('openAPIConfig'),
  '',
  installOptionsRepository.get('instance'),
);

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
