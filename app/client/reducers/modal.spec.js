import deepFreeze from 'deep-freeze';

import modal from './modal';

describe('modal reducer', () => {
    test('sets initial state', () => {
        expect(modal(undefined, {})).toEqual({ show: false, page: undefined });
    });

    test('handles show modal action', () => {
        const initialState = { show: false, page: undefined };
        const action = {
            type: 'SHOW_MODAL',
            page: 'new page'
        };

        deepFreeze(initialState);

        expect(modal(initialState, action)).toEqual({
            show: true,
            page: 'new page'
        });
    });

    test('handles hide modal action', () => {
        const initialState = { show: true, page: 'active modal page' };
        const action = {
            type: 'HIDE_MODAL'
        };

        deepFreeze(initialState);

        expect(modal(initialState, action)).toEqual({
            show: false,
            page: undefined
        });
    });
});
