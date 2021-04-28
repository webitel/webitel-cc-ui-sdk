import AgentStatusAPI from '../api/agent-status';

const actions = {
  UPDATE_AGENT_STATUS: async (context, { agentId, status, pauseCause }) => {
    try {
      await AgentStatusAPI.patch({ agentId, status, pauseCause });
    } catch (err) {
      throw err;
    }
  },
};

export default {
  namespaced: true,
  actions,
};
