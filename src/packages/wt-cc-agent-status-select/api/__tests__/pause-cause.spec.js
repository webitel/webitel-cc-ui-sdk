import instance from '../../../../_install/options/instance';
import PauseCauseAPI from '../pause-cause';

const items = [{ id: 1, name: 'jest' }];
const expectedResponse = {
  next: false,
  items: [{
    id: 1,
    name: 'jest',
    durationMin: 0,
    limitMin: 0,
  }],
};

/* mock SDK method api response with instance mock
 jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in jest.mock()
 */
const getMock = jest.fn(() => ({ items }));
jest.spyOn(instance.get(), 'request')
.mockImplementation(getMock);

describe('Agent Pause Cause API', () => {
  it('getList: correctly processes response', async () => {
    const response = await PauseCauseAPI.getList({ agentId: 0 });
    expect(getMock).toHaveBeenCalled();
    expect(response).toEqual(expectedResponse);
  });
});
