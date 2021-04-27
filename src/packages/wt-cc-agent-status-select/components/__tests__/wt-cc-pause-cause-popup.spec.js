import { shallowMount } from '@vue/test-utils';
import WtCcPauseCausePopup from '../_internals/wt-cc-pause-cause-popup.vue';

describe('Pause cause popup', () => {
  it('renders a component', () => {
    const wrapper = shallowMount(WtCcPauseCausePopup);
    expect(wrapper.exists())
      .toBe(true);
  });
  it('at option input event, sets "selected" its value', () => {
    const radioValue = 'jest';
    const wrapper = shallowMount(WtCcPauseCausePopup, {
      propsData: { options: [radioValue] },
    });
    wrapper.findComponent({ name: 'wt-radio' }).vm.$emit('input');
    expect(wrapper.vm.selected).toEqual(radioValue);
  });
  it('isDurationOverflow with limit = 0 returns false', () => {
    const wrapper = shallowMount(WtCcPauseCausePopup);
    const option = { durationMin: 10, limitMin: 0 };
    expect(wrapper.vm.isDurationOverflow(option)).toBe(false);
  });
  it('at "ok" btn click, emits "change" with "selected" value', () => {
    const selected = { name: 'jest' };
    const expectedValue = selected.name;
    const wrapper = shallowMount(WtCcPauseCausePopup, {
      data: () => ({ selected }),
    });
    wrapper.findComponent({ name: 'wt-button' }).vm.$emit('click');
    expect(wrapper.emitted().change[0]).toEqual([expectedValue]);
  });
});
