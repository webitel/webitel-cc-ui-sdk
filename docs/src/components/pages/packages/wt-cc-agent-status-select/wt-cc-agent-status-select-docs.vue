<template>
  <section>
    <h2>Agent Status Select</h2>
    <p>Agent status select with pause cause selection popup, api's and store module.</p>
    <article class="figures-wrapper">
      <figure>
        <img
          src="./_internals/img/agent-status-select__select.png"
          alt="agent status select select pic"
          width="171"
          height="153"
        >
        <p>Status select view</p>
      </figure>
      <figure>
        <img
          src="./_internals/img/agent-status-select__pause-cause-popup.png"
          alt="agent status select pause cause popup pic"
          width="600"
        >
        <p>Status select pause cause popup</p>
      </figure>
    </article>
    <article>
      <h3>Usage:</h3>
      <p>To use this package, you need to <strong>pass instance.js and openAPIConfig at plugin install</strong>.
      Then, you need to register store module and just use the component.</p>
      <p>use store module: </p>
      <pre><code class="language-javascript">
        // agent-store.js
        import statusSelect from '@webitel/cc-ui-sdk/src/packages/wt-cc-agent-status-select/store/agent-status-select';
        ...
        export default {
          ...,
          modules: { statusSelect, ... }
        }
      </code></pre>
      <p>use component: </p>
      <pre><code class="language-html">
        &lt;template&gt;
          &lt;wt-cc-agent-status-select
            namespace="agent"
            @changed="reloadAgent"
          &gt;&lt;/wt-cc-agent-status-select&gt;
        &lt;/template&gt;
      </code>
      <code class="language-javascript">
        // my-component.vue
        import WtCcAgentStatusSelect from '@webitel/cc-ui-sdk/src/packages/wt-cc-agent-status-select/components/wt-cc-agent-status-select.vue';

        export default {
          components: { WtCcAgentStatusSelect },
        }
      </code></pre>
    </article>
    <article>
      <h3>wt-cc-agent-status-select.vue</h3>
      <p>Package component is patching agent status by itself using store action, but doesn't load
      an agent and his status by itself. This decision were made because there's only 1 api
      for status patch, but many ways to get agent instance.</p>
      <component-props
        :properties="properties"
      ></component-props>
      <component-events
        :events="events"
      ></component-events>
    </article>
  </section>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'wt-cc-agent-status-select-docs',
  data: () => ({
    properties: [{}],
    events: [{}],
  }),
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
.figures-wrapper {
  display: flex;
}
</style>
