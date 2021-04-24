<template>
  <article class="agent-status-select">
    <wt-status-select
      class="agent-status-select__status-select"
      :status="agent.status"
      :status-duration="agent.statusDuration"
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
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import AgentStatus from '@webitel/ui-sdk/src/enums/AgentStatus/AgentStatus.enum';
import { mapActions, mapState } from 'vuex';
import PauseCauseAPI from '../api/pause-cause';
import PauseCausePopup from './_internals/pause-cause-popup.vue';

export default {
  name: 'agent-status-select',
  components: { PauseCausePopup },
  props: {
    namespace: {
      type: String,
    },
    agentStateVariable: {
      type: String,
      default: 'agent',
    },
  },
  data: () => ({
    isPauseCausePopup: false,
  }),
  computed: {
    ...mapState({
      agent(state) {
        return getNamespacedState(state, this.namespace)[this.agentStateVariable];
      },
    }),
    statusSelectNamespace() {
      const statusSelectNamespace = 'statusSelect';
      return `${this.namespace}/${statusSelectNamespace}`;
    },
  },
  methods: {
    ...mapActions({
      updateStatus(dispatch, payload) {
        return dispatch(`${this.statusSelectNamespace}/UPDATE_AGENT_STATUS`, payload);
      },
    }),
    async handleStatusSelectInput(status) {
      if (status === AgentStatus.PAUSE) {
        await this.loadPauseCauses();
        if (this.pauseCauses.length) {
          this.openPauseCausePopup();
          return;
        }
      }
      if (status === this.agent.status) return;
      await this.changeStatus({ status });
    },
    handlePauseCauseInput(pauseCause) {
      const status = AgentStatus.PAUSE;
      this.changeStatus({ status, pauseCause });
    },
    async changeStatus({ status, pauseCause }) {
      const { agentId } = this.agent;
      const statusPayload = { agentId, status, pauseCause };
      try {
        await this.updateStatus(statusPayload);
        this.$emit('changed', statusPayload);
      } catch {}
    },
    async loadPauseCauses() {
      this.isLoaded = false;
      try {
        const response = await PauseCauseAPI.getList({ agentId: this.agent.agentId });
        this.pauseCauses = response.items;
      } catch {}
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
.agent-status-select__status-select {
  max-width: 200px;
}
</style>
