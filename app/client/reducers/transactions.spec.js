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

        expect(transactions(initialState, action)).toEqual(['transactions']);
    });
});
