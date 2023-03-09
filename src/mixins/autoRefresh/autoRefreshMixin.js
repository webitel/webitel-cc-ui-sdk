import preventHiddenPageCallsDecorator
  from '@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator';

export default {
  data: () => ({
    autoRefresh: null,
    defaultAutoRefreshTimeout: 5 * 60 * 1000,
    autoRefreshTimeout: null,
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
      const timer = this.autoRefreshTimeout
        || +localStorage.getItem('auto-refresh')
        || this.defaultAutoRefreshTimeout;
      this.makeAutoRefresh = preventHiddenPageCallsDecorator(this.makeAutoRefresh);
      this.autoRefresh = setInterval(this.makeAutoRefresh, timer);
    },
    makeAutoRefresh() {
      this.loadList();
    },
  },
};
