import preventHiddenPageCallsDecorator
  from '@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator';

export default {
  data: () => ({
    autoRefresh: null,
    autoRefreshTimeout: 5 * 60 * 1000,
  }),

  created() {
    this.setAutoRefresh();
  },

  destroyed() {
    clearInterval(this.autoRefresh);
  },

  methods: {
    setAutoRefresh() {
      if (this.autoRefresh) clearInterval(this.autoRefresh);
      const timer = +localStorage.getItem('auto-refresh') || this.autoRefreshTimeout;
      this.makeAutoRefresh = preventHiddenPageCallsDecorator(this.makeAutoRefresh);
      this.autoRefresh = setInterval(this.makeAutoRefresh, timer);
    },
    makeAutoRefresh() {
      this.loadList();
    },
  },
};
