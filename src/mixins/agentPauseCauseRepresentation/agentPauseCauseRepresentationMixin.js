import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';

const prettifyPauseCauseDuration = (min) => {
  const SEC_IN_MIN = 60;
  const secDuration = convertDuration(min * SEC_IN_MIN);
  return secDuration.slice(0, -3);
};

export default {
  methods: {
    prettifyPauseCauseDuration,
    isDurationOverflow({ durationMin, limitMin }) {
      return (durationMin > limitMin) && limitMin !== 0;
    },
    duration({ durationMin, limitMin }) {
      return this.isDurationOverflow({ durationMin, limitMin })
        ? `-${prettifyPauseCauseDuration(durationMin - limitMin)}`
        : prettifyPauseCauseDuration(durationMin);
    },
    pauseCauseProgressColor({ durationMin, limitMin }) {
      if (this.isDurationOverflow({ durationMin, limitMin })) return 'danger';
      if (durationMin <= (limitMin * 0.75)) return 'success';
      return 'primary';
    },
  },
};
