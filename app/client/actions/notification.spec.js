import { show } from './notification';

jest.useFakeTimers();

describe('notification actions', () => {
    test('show returns action object', () => {
        // GIVEN
        const text = 'text';
        const dispatch = jest.fn();

        // WHEN
        show(text)(dispatch);

        // THEN
        expect(dispatch.mock.calls[0]).toEqual([{
            type: 'SHOW_NOTIFICATION',
            text
        }]);

        const timeoutValue = setTimeout.mock.calls[0][1];

        expect(timeoutValue).toBe(2000);

        // WHEN
        jest.runOnlyPendingTimers();

        // THEN
        expect(dispatch.mock.calls[1]).toEqual([{
            type: 'HIDE_NOTIFICATION'
        }]);
    });
});
