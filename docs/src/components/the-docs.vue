<template>
  <main class="docs">
    <wt-page-wrapper :actions-panel="false">
      <template slot="header">
        <wt-headline>
          <wt-navigation-bar :nav="nav"/>
          <h1>Webitel Contact-Center UI SDK v. 0.1.10</h1>
        </wt-headline>
      </template>
      <template slot="main">
        <div class="docs-content-wrapper">
          <router-view/>
        </div>
      </template>
    </wt-page-wrapper>
  </main>
</template>

<script>
export default {
  name: 'the-docs',
  computed: {
    nav() {
      return [
        {
          name: 'Quick Start',
          value: 'quick-start',
          route: '/quick-start',
        },
        this.componentsNav,
        // this.localeNav,
        this.mixinsNav,
        this.packagesNav,
        // this.modulesNav,
        // this.scriptsNav,
        // this.storeNav,
      ];
    },
    componentsNav() {
      return {
        name: 'Components',
        value: 'components',
        route: '/components',
        subNav: [
          {
            name: 'Agent Status Timers',
            value: 'agent-status-timers',
            route: 'agent-status-timers',
          },
        ].sort((a, b) => a.name.localeCompare(b.name)),
      };
    },
    filtersNav() {
      return {
        name: 'Filters',
        value: 'filters',
        route: '/filters',
        subNav: [],
      };
    },
    localeNav() {
      return {
        name: 'Locale',
        value: 'locale',
        route: '/locale',
        // subNav: [],
      };
    },
    directivesNav() {
      return {
        name: 'Directives',
        value: 'directives',
        route: '/directives',
        subNav: [],
      };
    },
    mixinsNav() {
      return {
        name: 'Mixins',
        value: 'mixins',
        route: '/mixins',
        subNav: [
          {
            name: 'Auto Refresh',
            value: 'auto-refresh',
            route: 'auto-refresh',
          },
          {
            name: 'Agent Pause Cause Representation',
            value: 'agent-pause-cause-representation',
            route: 'agent-pause-cause-representation',
          },
        ],
      };
    },
    packagesNav() {
      return {
        name: 'Packages',
        value: 'packages',
        route: '/packages',
        subNav: [
          {
            name: 'Agent Status Select',
            value: 'agent-status-select',
            route: 'agent-status-select',
          },
        ],
      };
    },
    modulesNav() {
      return {
        name: 'Modules',
        value: 'modules',
        route: '/modules',
        subNav: [],
      };
    },
    scriptsNav() {
      return {
        name: 'Scripts',
        value: 'scripts',
        route: '/scripts',
        subNav: [],
      };
    },
    storeNav() {
      return {
        name: 'Store',
        value: 'store',
        route: '/store',
        subNav: [],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.docs {
  min-height: 100%;
  background: var(--main-page-bg-color);

  .wt-page-wrapper__main > * {
    width: 100%;
  }
}
</style>
