<template>
  <section class="mixins">
    <h2>Auto Refresh Mixin</h2>
    <p>Mixin</p>
    <article class="mixin">
      <h3>Data</h3>
      <pre>
        <code class="language-javascript">autoRefreshTimeout // refresh interval time. 5 sec by default</code>
       </pre>
    </article>
    <article class="mixin">
      <h3>Methods</h3>
      <pre>
        <code class="language-javascript">makeAutoRefresh() // is called periodically. By default calls this.loadList(); </code>
       </pre>
    </article>
  </section>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'auto-refresh-mixin-docs',
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style scoped>

</style>
