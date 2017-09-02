import deepFreeze from 'deep-freeze';

import filter from './filter';

describe('filter reducer', () => {
    test('sets initial state', () => {
        expect(filter(undefined, {})).toEqual('');
    });

    test('handles edit filter action', () => {
        const initialState = '';
        const action = {
            type: 'EDIT_FILTER',
            filter: 'new filter'
        };

        deepFreeze(initialState);

        expect(filter(initialState, action)).toEqual('new filter');
    });
});
