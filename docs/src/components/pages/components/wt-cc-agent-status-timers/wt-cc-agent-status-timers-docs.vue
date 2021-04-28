<template>
  <section>
    <h2>Agent Status Timers</h2>
    <article>
      <div class="example-wrapper">
        <wt-cc-agent-status-timers :status="{ online: 10, offline: 20, pause: 30 }"></wt-cc-agent-status-timers>
        <pre><code class="language-html">&lt;wt-cc-agent-status-timers :status="{ online: 10, offline: 20, pause: 30 }"&gt;&lt;/wt-cc-agent-status-timers&gt;</code></pre>
      </div>
    </article>
    <component-props
      :properties="properties"
    ></component-props>
  </section>
</template>

<script>
  import Prism from 'prismjs';

  export default {
    name: 'wt-cc-agent-status-timers-docs',
    data: () => ({
      properties: [
        {
          value: 'status',
          code: '<wt-cc-agent-status-timers :status="{ online: 10, offline: 20, pause: 30 }"></wt-cc-agent-status-timers>',
          type: 'Object',
          required: true,
          description: 'Object should have "online", "offline" and "pause" properties for representation',
        },
      ],
    }),
    mounted() {
      Prism.highlightAll();
    },
  };
</script>

<style lang="scss" scoped>
</style>
