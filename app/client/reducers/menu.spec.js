import deepFreeze from 'deep-freeze';

import menu from './menu';

describe('menu reducer', () => {
    test('sets initial state', () => {
        expect(menu(undefined, {})).toEqual(false);
    });

    test('handles toggle action', () => {
        const initialState = false;
        const action = {
            type: 'TOGGLE_MENU'
        };

        deepFreeze(initialState);

        expect(menu(initialState, action)).toBe(true);
    });
});
