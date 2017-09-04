import modal from './modal';

describe('modal reducer', () => {
    test('sets initial state', () => {
        expect(modal(undefined, {})).toEqual({ show: false, page: null });
    });

    test('handles toggle modal action', () => {
        const initialState = { show: false, page: null };
        const action = {
            type: 'TOGGLE_MODAL',
            page: 'new page'
        };

        expect(modal(initialState, action)).toEqual({
            show: true,
            page: 'new page'
        });
    });
});
