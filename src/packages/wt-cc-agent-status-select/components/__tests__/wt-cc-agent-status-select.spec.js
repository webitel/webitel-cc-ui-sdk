import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AgentStatus from '@webitel/ui-sdk/src/enums/AgentStatus/AgentStatus.enum';
import WtCcAgentStatusSelect from '../wt-cc-agent-status-select.vue';
import statusSelect from '../../store/agent-status-select';
import PauseCauseAPI from '../../api/pause-cause';

const pauseCauses = [{ name: 'jest1' }, { name: 'jest2' }];
const getAgentPauseCausesMock = jest.fn(() => ({ items: pauseCauses }));
jest.spyOn(PauseCauseAPI, 'getList').mockImplementation(getAgentPauseCausesMock);

const localVue = createLocalVue();
localVue.use(Vuex);

const namespace = 'agents';
const agent = {
  status: '',
  agentId: 1,
};
const updateAgentStatusMock = jest.fn();
jest.spyOn(statusSelect.actions, 'UPDATE_AGENT_STATUS')
  .mockImplementation(updateAgentStatusMock);

const store = new Vuex.Store({
  modules: {
    [namespace]: {
      state: { agent },
      modules: { statusSelect },
      namespaced: true,
    },
  },
});

const mountOptions = {
  localVue,
  store,
  propsData: { namespace },
};

describe('Wt Cc Agent Status Select', () => {
  beforeEach(() => {
    updateAgentStatusMock.mockClear();
    getAgentPauseCausesMock.mockClear();
  });
  it('renders a component', () => {
    const wrapper = shallowMount(WtCcAgentStatusSelect, mountOptions);
    expect(wrapper.exists())
      .toBe(true);
  });
  it(`at wt-status-select "change" to "online" event,  triggers UPDATE_AGENT_STATUS
   with "online" status`, () => {
    const wrapper = shallowMount(WtCcAgentStatusSelect, mountOptions);
    wrapper.findComponent({ name: 'wt-status-select' })
      .vm.$emit('change', AgentStatus.ONLINE);
    const actionPayload = {
      status: AgentStatus.ONLINE, agentId: agent.agentId, payload: undefined,
    };
    expect(updateAgentStatusMock.mock.calls[0][1]).toEqual(actionPayload);
  });
  it('at wt-status-select "change" to "pause" event, pause causes are loaded', async () => {
    const wrapper = shallowMount(WtCcAgentStatusSelect, mountOptions);
    wrapper.findComponent({ name: 'wt-status-select' })
      .vm.$emit('change', AgentStatus.PAUSE);
    await wrapper.vm.$nextTick();
    expect(getAgentPauseCausesMock).toHaveBeenCalled();
  });
  it(`at wt-status-select "change" to "pause" event and pause causes truthy response,
   pause-cause-popup appears`, async () => {
    const wrapper = shallowMount(WtCcAgentStatusSelect, mountOptions);
    wrapper.findComponent({ name: 'wt-status-select' })
      .vm.$emit('change', AgentStatus.PAUSE);
    await wrapper.vm.$nextTick(); // load pause causes
    await wrapper.vm.$nextTick(); // render popup
    expect(wrapper.findComponent({ name: 'wt-cc-pause-cause-popup' }).isVisible()).toBe(true);
  });
  it(`at pause-cause-popup "change" event, triggers UPDATE_AGENT_STATUS
   with "pause" status and passed pauseCause`, async () => {
    const pauseCause = 'jest';
    const wrapper = shallowMount(WtCcAgentStatusSelect, mountOptions);
    wrapper.vm.openPauseCausePopup();
    await wrapper.vm.$nextTick();
    wrapper.findComponent({ name: 'wt-cc-pause-cause-popup' })
      .vm.$emit('change', pauseCause);
    const actionPayload = {
      status: AgentStatus.PAUSE, agentId: agent.agentId, pauseCause,
    };
    expect(updateAgentStatusMock.mock.calls[0][1]).toEqual(actionPayload);
  });
});
