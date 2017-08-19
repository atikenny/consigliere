import deepFreeze from 'deep-freeze';

import transactions from './transactions';

describe('transactions reducer', () => {
    test('sets initial state', () => {
        expect(transactions(undefined, {})).toEqual([]);
    });

    test('handles load transactions action', () => {
        const initialState = 'initial state';
        const action = {
            type: 'LOAD_TRANSACTIONS',
            transactions: ['transactions']
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual(['transactions']);
    });

    test('handles transactions add label action', () => {
        const initialState = [
            { id: 'id' },
            { id: 'no action' }
        ];
        const action = {
            type: 'ADD_LABEL',
            id: 'id',
            label: 'label'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual([
            { id: 'id', labels: ['label'] },
            { id: 'no action' }
        ]);
    });
});
