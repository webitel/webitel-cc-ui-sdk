import AgentStatusAPI from '../../api/agent-status';
import agentStatusSelect from '../agent-status-select';

const patchAgentStatusMock = jest.fn();
jest.spyOn(AgentStatusAPI, 'patch')
  .mockImplementation(patchAgentStatusMock);

describe('agent status select store: actions', () => {
  const context = {};
  beforeEach(() => {
    patchAgentStatusMock.mockClear();
  });
  it('at UPDATE_AGENT_STATUS calls patch api with new status', () => {
    const agentStatus = { status: 'pause', pauseCause: 'jest', agentId: 1 };
    agentStatusSelect.actions.UPDATE_AGENT_STATUS(context, agentStatus);
    expect(patchAgentStatusMock).toHaveBeenCalledWith(agentStatus);
  });
});
