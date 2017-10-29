import deepFreeze from 'deep-freeze';

import transactions from './transactions';

describe('transactions reducer', () => {
    test('sets initial state', () => {
        expect(transactions(undefined, {})).toEqual({
            items: [],
            filter: ''
        });
    });

    test('handles load transactions action', () => {
        const initialState = {
            items: [{ id: 'existing item' }],
            filter: ''
        };
        const action = {
            type: 'LOAD_TRANSACTIONS',
            transactions: [{ id: 'existing item' }, { id: 'new item' }]
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [{ id: 'existing item' }, { id: 'new item' }],
            filter: '',
            isLabelsOpen: false
        });
    });    

    test('handles load transactions action with existing items', () => {
        const initialState = {
            items: [],
            filter: ''
        };
        const action = {
            type: 'LOAD_TRANSACTIONS',
            transactions: ['transactions']
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: ['transactions'],
            filter: '',
            isLabelsOpen: false
        });
    });

    test('handles set filter action', () => {
        const initialState = {
            filter: ''
        };
        const action = {
            type: 'SET_FILTER',
            filter: 'new filter'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            filter: 'new filter'
        });
    });
});
