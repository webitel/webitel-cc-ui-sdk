import agentPauseCauseRepresentationMixin
  from '../../../mixins/agentPauseCauseRepresentationMixin/agentPauseCauseRepresentationMixin';

export default {
  mixins: [agentPauseCauseRepresentationMixin],
  methods: {
    optionDuration({ durationMin, limitMin }) {
      return this.isDurationOverflow({ durationMin, limitMin })
        ? `-${durationMin - limitMin} ${this.$t('packages.agentStatusSelect.pauseCausePopup.min')}`
        : `${durationMin} ${this.$t('packages.agentStatusSelect.pauseCausePopup.min')}`;
    },
    optionLimit({ limitMin }) {
      return limitMin
        ? `${limitMin} ${this.$t('packages.agentStatusSelect.pauseCausePopup.min')}`
        : this.$t('packages.agentStatusSelect.pauseCausePopup.unlimited');
    },
  },
};
