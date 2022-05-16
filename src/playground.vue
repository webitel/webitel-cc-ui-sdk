<template>
  <div class="playground">
    <wt-icon icon="edit"></wt-icon>
    <wt-cc-agent-status-timers
      :status="{ online: '10', offline: '20', pause: '30' }">
    </wt-cc-agent-status-timers>
    <wt-progress-bar :value="12"></wt-progress-bar>
  </div>
</template>

<script>

export default {
  name: 'playground',
  data: () => ({
  }),
  methods: {
    log(event, inputEvent) {
      console.log(event, inputEvent);
    },
  },
};
</script>

<style lang="scss" scoped>
.playground {
  min-height: 100vh;
  padding: 90px;
  box-sizing: border-box;

  & > div {
    margin-bottom: 30px;
    border-bottom: 2px solid lightskyblue;

    & > * {
      margin: 10px;
    }
  }
}

.scrollbar-outer {
  @extend %wt-scrollbar;
}
</style>
