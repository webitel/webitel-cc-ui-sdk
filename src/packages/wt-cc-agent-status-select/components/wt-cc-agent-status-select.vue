<template>
  <article class="wt-cc-agent-status-select">
    <wt-status-select
      class="wt-cc-agent-status-select__status-select"
      :status="status"
      :status-duration="statusDuration"
      @change="handleStatusSelectInput"
    ></wt-status-select>
    <pause-cause-popup
      v-if="isPauseCausePopup"
      :options="pauseCauses"
      @change="handlePauseCauseInput"
      @close="closePauseCausePopup"
    ></pause-cause-popup>
  </article>
</template>

<script>
import AgentStatus from '@webitel/ui-sdk/src/enums/AgentStatus/AgentStatus.enum';
import AgentStatusAPI from '../api/agent-status';
import PauseCauseAPI from '../api/pause-cause';
import PauseCausePopup from './_internals/wt-cc-pause-cause-popup.vue';

export default {
  name: 'wt-cc-agent-status-select',
  components: { PauseCausePopup },
  props: {
    agentId: {
      type: [String, Number],
    },
    status: {
      // can be undefined, is agent wasn't loaded yet
      default: AgentStatus.OFFLINE,
    },
    statusDuration: {
      type: [Number, String],
      default: 0,
    },
  },
  data: () => ({
    isPauseCausePopup: false,
    pauseCauses: [],
  }),
  methods: {
    async updateStatus({ agentId, status, pauseCause }) {
      try {
        await AgentStatusAPI.patch({ agentId, status, pauseCause });
      } catch (err) {
        throw err;
      }
    },
    async handleStatusSelectInput(status) {
      if (status === AgentStatus.PAUSE) {
        await this.loadPauseCauses();
        if (this.pauseCauses.length) {
          this.openPauseCausePopup();
          return;
        }
      }
      if (status === this.status) return;
      await this.changeStatus({ status });
    },
    handlePauseCauseInput(pauseCause) {
      const status = AgentStatus.PAUSE;
      this.changeStatus({ status, pauseCause });
    },
    async changeStatus({ status, pauseCause }) {
      const statusPayload = { agentId: this.agentId, status, pauseCause };
      try {
        await this.updateStatus(statusPayload);
        this.$emit('changed', statusPayload);
      } catch (err) {
        console.error(err);
      }
    },
    async loadPauseCauses() {
      this.isLoaded = false;
      try {
        const response = await PauseCauseAPI.getList({ agentId: this.agentId });
        this.pauseCauses = response.items;
      } catch {
      }
      this.isLoaded = true;
    },
    openPauseCausePopup() {
      this.isPauseCausePopup = true;
    },
    closePauseCausePopup() {
      this.isPauseCausePopup = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-cc-agent-status-select__status-select {
  max-width: 200px;
}
</style>
