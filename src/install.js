/* eslint-disable */
import Components from './components'; // init all components

export default {
  install(Vue) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name]);
    });
  },
};
