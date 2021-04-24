/* eslint-disable */
import LibVue from 'vue';
// import Components from './components'; // init all components
import instanceOption from './options/instance';
import openAPIConfigOption from './options/openAPIConfig';

export default {
  install(Vue, {
    instance,
    openAPIConfig,
  }) {
    // Object.keys(Components).forEach((name) => {
    //   Vue.component(name, Components[name]);
    // });
    // Vue.prototype.$webitelUI = {
      // locale: this.$i18n.locale,
    // };
    instanceOption.set(instance);
    openAPIConfigOption.set(openAPIConfig);
  },
};