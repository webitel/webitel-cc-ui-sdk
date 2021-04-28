import Vue from 'vue';
import VueRouter from 'vue-router';

import QuickStart from '../components/pages/quick-start/quick-start.vue';

import StyleDocs from '../components/pages/style/style-docs.vue';

import ComponentsDocs from '../components/pages/components/components-docs.vue';
import WtCcAgentStatusTimersDocs from '../components/pages/components/wt-cc-agent-status-timers/wt-cc-agent-status-timers-docs.vue';

import FiltersDocs from '../components/pages/filters/filters-docs.vue';

import LocaleDocs from '../components/pages/locale/locale-docs.vue';

import DirectivesDocs from '../components/pages/directives/directives-docs.vue';

import MixinsDocs from '../components/pages/mixins/mixins-docs.vue';
import AutoRefreshMixinDocs from '../components/pages/mixins/autoRefresh/autoRefreshMixinDocs.vue';
import AgentPauseCauseRepresentationMixinDocs from '../components/pages/mixins/agentPauseCauseRepresentationMixin/agentPauseCauseRepresentationMixinDocs.vue';

import ModulesDocs from '../components/pages/modules/modules-docs.vue';

import PackagesDocs from '../components/pages/packages/packages-docs.vue';
import WtCcAgentStatusSelectDocs from '../components/pages/packages/wt-cc-agent-status-select/wt-cc-agent-status-select-docs.vue';

import ScriptsDocs from '../components/pages/scripts/scripts-docs.vue';

import StoreDocs from '../components/pages/store/store-docs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/quick-start',
  },
  {
    path: '/quick-start',
    name: 'quick-start',
    component: QuickStart,
  },
  {
    path: '/style',
    name: 'style',
    component: StyleDocs,
    children: [],
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsDocs,
    children: [
      {
        path: 'agent-status-timers',
        name: 'agent-status-timers',
        component: WtCcAgentStatusTimersDocs,
      },
    ],
  },
  {
    path: '/filters',
    name: 'filters',
    component: FiltersDocs,
    children: [],
  },
  {
    path: '/locale',
    name: 'locale',
    component: LocaleDocs,
    children: [],
  },
  {
    path: '/directives',
    name: 'directives',
    component: DirectivesDocs,
    children: [],
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: MixinsDocs,
    children: [
      {
        path: 'agent-pause-cause-representation',
        name: 'agent-pause-cause-representation',
        component: AgentPauseCauseRepresentationMixinDocs,
      },
      {
        path: 'auto-refresh',
        name: 'auto-refresh',
        component: AutoRefreshMixinDocs,
      },
    ],
  },
  {
    path: '/modules',
    name: 'modules',
    component: ModulesDocs,
    children: [],
  },
  {
    path: '/scripts',
    name: 'scripts',
    component: ScriptsDocs,
    children: [],
  },
  {
    path: '/packages',
    name: 'packages',
    component: PackagesDocs,
    children: [
      {
        path: 'agent-status-select',
        name: 'agent-status-select',
        component: WtCcAgentStatusSelectDocs,
      },
    ],
  },
  {
    path: '/store',
    name: 'store',
    component: StoreDocs,
    children: [],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
