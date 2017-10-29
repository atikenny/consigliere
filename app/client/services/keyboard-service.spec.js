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

        expect(handlerSpy).toHaveBeenCalledWith(value);

        keyHandler({
            key: 'not the right key'
        });

        expect(handlerSpy).toHaveBeenCalled();
    });
});
