import installOptionsRepository from '../../../../_install/InstallOptionsRepository';
import AgentStatusAPI from '../agent-status';

/* mock SDK method api response with instance mock
 jest.spyOn(instance) used instead of jest.mock('@/app/api/instance) because WebStorm
  doesn't watch path changes in jest.mock()
 */
const patchMock = jest.fn();
jest.spyOn(installOptionsRepository.get('instance'), 'request')
.mockImplementation(patchMock);

describe('Agent Status API', () => {
  it('patch: correctly processes response', async () => {
    const payload = { agentId: 1, status: 'jest', pauseCause: 'jest' };
    const expectedData = { id: 1, status: 'jest', payload: 'jest' };
    await AgentStatusAPI.patch(payload);
    expect(patchMock).toHaveBeenCalled();
    const reqData = JSON.parse(patchMock.mock.calls[0][0].data);
    expect(reqData).toEqual(expectedData);
  });
});
