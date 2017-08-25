import { onSpecificKey } from './keyboard-service';

describe('keyboard-service module', () => {
    test('onSpecificKey() calls to provided callback when key matches', () => {
        const handlerSpy = jest.fn();
        const key = 'key';
        const value = 'value';
        const keyHandler = onSpecificKey(key, handlerSpy);

        keyHandler({
            key,
            target: { value }
        });

        expect(handlerSpy.mock.calls[0]).toEqual([value]);

        keyHandler({
            key: 'not the right key'
        });

        expect(handlerSpy.mock.calls.length).toBe(1);
    });
});
