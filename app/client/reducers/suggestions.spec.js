import deepFreeze from 'deep-freeze';

import suggestions from './suggestions';

describe('suggestions reducer', () => {
    test('sets initial state', () => {
        expect(suggestions(undefined, {})).toEqual({ isOpen: false });
    });

    test('handles open suggestions action', () => {
        const initialState = { isOpen: false };
        const action = {
            type: 'OPEN_SUGGESTIONS'
        };

        deepFreeze(initialState);

        expect(suggestions(initialState, action)).toEqual({ isOpen: true });
    });

    test('handles close suggestions action', () => {
        const initialState = { isOpen: true };
        const action = {
            type: 'CLOSE_SUGGESTIONS'
        };

        deepFreeze(initialState);

        expect(suggestions(initialState, action)).toEqual({ isOpen: false });
    });
});
