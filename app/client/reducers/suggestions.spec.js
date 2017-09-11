import suggestions from './suggestions';

describe('suggestions reducer', () => {
    test('sets initial state', () => {
        expect(suggestions(undefined, {})).toEqual([]);
    });

    test('handles open suggestions action', () => {
        const initialState = [];
        const id = 'id';
        const action = {
            type: 'OPEN_SUGGESTIONS',
            id
        };

        expect(suggestions(initialState, action)).toEqual([
            { id, isOpen: true }
        ]);
    });

    test('handles close suggestions action', () => {
        const initialState = [];
        const id = 'id';
        const action = {
            type: 'CLOSE_SUGGESTIONS',
            id
        };

        expect(suggestions(initialState, action)).toEqual([
            { id, isOpen: false }
        ]);
    });
});
