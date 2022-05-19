import Vue from 'vue';
// import main file
import WebitelUI from '@webitel/ui-sdk/dist/ui-sdk.common';

// import locale
import eventBus from '@webitel/ui-sdk/src/scripts/eventBus';

// import styles
import '@webitel/ui-sdk/dist/ui-sdk.css';

import '@webitel/ui-sdk/dist/img/sprite';

const globals = {
  $baseURL: process.env.BASE_URL,
};
// init plugin
Vue.use(WebitelUI, { eventBus, globals });
