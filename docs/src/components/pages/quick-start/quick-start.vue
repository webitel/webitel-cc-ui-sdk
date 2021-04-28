<template>
  <section>
    <h2>Installation</h2>
    <ol>
      <li>
        Install with <strong>npm</strong>:
        <pre><code class="language-bash">npm i @webitel/cc-ui-sdk</code></pre>
      </li>
      <li>
        Create <strong> plugins/webitel-cc-ui.js</strong> file:
        <pre><code class="language-javascript">
            import Vue from 'vue';
          // import main file and styles
            import WebitelCCUI from '@webitel/cc-ui-sdk/dist/cc-ui-sdk.common';
            import '@webitel/cc-ui-sdk/dist/cc-ui-sdk.css';

          // import locales
            import WebitelCCUIEn from '@webitel/cc-ui-sdk/src/locale/en/en';
            import WebitelCCUIRu from '@webitel/cc-ui-sdk/src/locale/ru/ru';
            import i18n from '../locale/i18n';

          // import specific project files for packages usage
            import instance from '../api/instance';
            import openAPIConfig from '../api/openAPIConfig';

            Vue.use(WebitelCCUI, { instance, openAPIConfig });
            i18n.mergeLocaleMessage('en', WebitelCCUIEn);
            i18n.mergeLocaleMessage('ru', WebitelCCUIRu);
            i18n.mergeLocaleMessage('ua', WebitelCCUIEn);
        </code></pre>
      </li>
      <li>
        Import file to <strong>main.js</strong>:
        <pre><code class="language-javascript">import './plugins/webitel-cc-ui';</code></pre>
      </li>
    </ol>
  </section>
</template>

<script>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-bash';

  export default {
    name: 'quick-start',
    mounted() {
      Prism.highlightAll();
    },
  };
</script>

<style lang="scss" scoped>
  pre {
    min-width: 600px;
    width: 60%;
    padding: 10px;
    margin-right: 60px;
    background: var(--main-primary-accent-color);
    border-radius: var(--border-radius);
    color: var(--main-primary-color);
    cursor: text;
  }
</style>
