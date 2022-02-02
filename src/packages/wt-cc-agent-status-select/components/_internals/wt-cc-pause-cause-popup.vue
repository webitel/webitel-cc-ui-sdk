<template>
  <wt-popup class="wt-cc-pause-cause-popup" min-width="480" @close="close">
    <template slot="title">
      {{ $t('packages.agentStatusSelect.pauseCausePopup.title') }}
    </template>
    <template slot="main">
      <form @submit.prevent="setPause">
        <ul>
          <li
            class="wt-cc-pause-cause-popup__option"
            v-for="(option) of options"
            :key="option.id"
          >
            <wt-radio
              class="wt-cc-pause-cause-popup__option__radio"
              :selected="selected.id"
              :value="option.id"
              :label="option.name"
              @input="select(option)"
            ></wt-radio>
            <div class="wt-cc-pause-cause-popup__option__limits-wrapper">
              <span :class="{
                    'wt-cc-pause-cause-popup__option__duration--overflow': isDurationOverflow(option),
                 }">
                {{ optionDuration(option) }}
              </span>
              /
              <span>{{ optionLimit(option) }}</span>
            </div>
          </li>
        </ul>
      </form>
    </template>
    <template slot="actions">
      <wt-button
        :disabled="!selected"
        @click="setPause"
      >{{ $t('reusable.ok') }}
      </wt-button>
      <wt-button
        color="secondary"
        @click="close"
      >{{ $t('reusable.cancel') }}
      </wt-button>
    </template>
  </wt-popup>
</template>

<script>
import pauseCauseDurationMixin from '../../mixins/pauseCauseDurationMixin';

export default {
  name: 'wt-cc-pause-cause-popup',
  mixins: [pauseCauseDurationMixin],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    selected: '',
  }),
  methods: {
    select(option) {
      this.selected = option;
    },
    setPause() {
      this.$emit('change', this.selected.name);
      this.close();
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-cc-pause-cause-popup__option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: var(--spacing-sm);
  }
}

.wt-cc-pause-cause-popup__option__limits-wrapper {
  & > span {
    @extend %typo-caption;
    padding: 6px 10px;
  }

  .wt-cc-pause-cause-popup__option__duration--overflow {
    color: var(--false-color);
  }
}
</style>
