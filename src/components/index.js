import Vue from 'vue';
import WtCcAgentStatusTimers from './wt-cc-agent-status-timers/wt-cc-agent-status-timers.vue';

const Components = {
  WtCcAgentStatusTimers,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
