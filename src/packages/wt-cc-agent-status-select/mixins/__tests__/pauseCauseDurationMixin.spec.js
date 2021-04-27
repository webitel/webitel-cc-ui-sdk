import { shallowMount } from '@vue/test-utils';
import pauseCauseDurationMixin from '../pauseCauseDurationMixin';

describe('Pause Cause Duration mixin', () => {
  const Component = {
    mixins: [pauseCauseDurationMixin],
    render() {},
  };
  it('renders a component with mixin', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.exists()).toBe(true);

  });
});
