<template>
  <section class="mixins">
    <h2>Agent Pause Cause Representation Mixin</h2>
    <p>Mixin implements methods for representation of agent pause cause durations.</p>
    <article class="mixin">
      <h3>Methods</h3>
      <pre>
        <code class="language-javascript">prettifyPauseCauseDuration(min: number) // => String: '00:min'. Used for future computing</code>
        <code class="language-javascript">isDurationOverflow({ durationMin, limitMin }) // => Boolean: is duration > limit</code>
        <code class="language-javascript">duration({ durationMin, limitMin }) // => String: duration representation</code>
        <code class="language-javascript">pauseCauseProgressColor({ durationMin, limitMin }) // => String: wt-progress-bar color string</code>
      </pre>
    </article>
  </section>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'agent-pause-cause-representation-mixin-docs',
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style scoped>

</style>
