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
            { id: 'id', newLabelValue: 'new label' },
            { id: 'no action' }
        ];
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual([
            { id: 'id', labels: ['new label'], newLabelValue: 'new label' },
            { id: 'no action' }
        ]);
    });

    test('does not add existing label', () => {
        const initialState = [
            { id: 'id', labels: ['existing label'], newLabelValue: 'existing label' }
        ];
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual([
            { id: 'id', labels: ['existing label'], newLabelValue: 'existing label' }
        ]);
    });

    test('does not add empty label', () => {
        const initialState = [
            { id: 'id', labels: ['label 1'], newLabelValue: '' }
        ];
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual([
            { id: 'id', labels: ['label 1'], newLabelValue: '' }
        ]);
    });

    test('handles transactions delete label action', () => {
        const initialState = [
            { id: 'id', labels: ['label 1', 'label to delete'] },
            { id: 'not modified', labels: ['label 1', 'label 2'] }
        ];
        const action = {
            type: 'DELETE_LABEL',
            transactionId: 'id',
            label: 'label to delete'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual([
            { id: 'id', labels: ['label 1'] },
            { id: 'not modified', labels: ['label 1', 'label 2'] }
        ]);
    });

    test('handles set new label value action', () => {
        const initialState = [
            { id: 'id' },
            { id: 'not modified', newLabelValue: 'not modified new label' }
        ];
        const action = {
            type: 'SET_NEW_LABEL_VALUE',
            id: 'id',
            value: 'new label'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual([
            { id: 'id', newLabelValue: 'new label' },
            { id: 'not modified', newLabelValue: 'not modified new label' }
        ]);
    });
});
