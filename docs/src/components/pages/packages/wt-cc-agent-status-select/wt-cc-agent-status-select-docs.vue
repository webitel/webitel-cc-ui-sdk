<template>
  <section>
    <h2>Agent Status Select</h2>
    <p>Agent status select with pause cause selection popup and its api's.</p>
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
      <p>In order to use this package, you need to <strong>set axios instance.js and
        openAPIConfig.js to installOptionsRepository at webitel-cc-ui plugin install</strong>.</p>
      <p>use component: </p>
      <pre><code class="language-html">
        &lt;template&gt;
          &lt;wt-cc-agent-status-select
            :agent-id="agent.agentId"
            :status="agent.status"
            :status-duration="agent.statusDuration"
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
      <p>Package component is patching agent status by itself, but doesn't load
      an agent and his status. This decision were made because there's only 1 api
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
    properties: [
      {
        value: 'agentId',
        code: '<wt-cc-agent-status-timers :agentId="10"></wt-cc-agent-status-timers>',
        type: ['Number', 'String'],
        description: 'Id of agent we\'re working on. Used for patching status changes and receiving pause causes.',
      },
      {
        value: 'status',
        code: '<wt-cc-agent-status-timers :status="\'online\'"></wt-cc-agent-status-timers>',
        type: 'String',
        default: 'AgentStatus.OFFLINE // \'offline\'',
        description: 'Agent status.',
      },
      {
        value: 'statusDuration',
        code: '<wt-cc-agent-status-timers :status="\'online\'"></wt-cc-agent-status-timers>',
        type: ['String', 'Number'],
        description: `Value, represented on select. If value is numeric, it is parsed by
         convertDuration webitel-ui script`,
      },
    ],
    events: [
      {
        name: 'changed',
        params: [{ name: 'change status payload', description: '{ agentId, status, pauseCause }' }],
        description: 'Status changed event.'
      }
    ],
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
