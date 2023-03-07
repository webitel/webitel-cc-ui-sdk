import { createApp } from 'vue';
import App from './the-app.vue';
import Components from './components'; // init all components
import i18n from './locale/i18n';
import WebitelUi from './plugins/webitel-ui';

const app = createApp(App)
.use(i18n)
.use(...WebitelUi);

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

app.mount('#app');
