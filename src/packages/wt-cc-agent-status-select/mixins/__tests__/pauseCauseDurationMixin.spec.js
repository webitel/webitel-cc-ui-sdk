import { shallowMount } from '@vue/test-utils';
import pauseCauseDurationMixin from '../pauseCauseDurationMixin';

describe('Pause Cause Duration mixin', () => {
  const Component = {
    mixins: [pauseCauseDurationMixin],
    render() {},
  };
  it('isDurationOverflow with limit = 0 returns false', () => {
    const wrapper = shallowMount(Component);
    const option = { durationMin: 10, limitMin: 0 };
    expect(wrapper.vm.isDurationOverflow(option)).toBe(false);
  });
});
