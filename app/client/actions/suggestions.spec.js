import {
    open,
    close
} from './suggestions';

describe('suggestions actions', () => {
    test('open returns action object', () => {
        expect(open()).toEqual({
            type: 'OPEN_SUGGESTIONS'
        });
    });

    test('close returns action object', () => {
        expect(close()).toEqual({
            type: 'CLOSE_SUGGESTIONS'
        })
    });
});
