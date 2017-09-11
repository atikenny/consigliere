import {
    open,
    close
} from './suggestions';

describe('suggestions actions', () => {
    test('open returns action object', () => {
        const id = 'id';

        expect(open(id)).toEqual({
            type: 'OPEN_SUGGESTIONS',
            id
        });
    });

    test('close returns action object', () => {
        const id = 'id';

        expect(close(id)).toEqual({
            type: 'CLOSE_SUGGESTIONS',
            id
        })
    });
});
