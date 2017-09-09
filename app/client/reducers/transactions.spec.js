import deepFreeze from 'deep-freeze';

import transactions from './transactions';
import * as selectors from 'selectors/transactions';

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

    test('handles add label action', () => {
        const initialState = {
            items: [
                { id: 'id', newLabelValue: 'new label' },
                { id: 'no action' }
            ]
        };
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id', labels: ['new label'], newLabelValue: 'new label' },
                { id: 'no action' }
            ]
        });
    });

    test('does not add existing label', () => {
        const initialState = {
            items: [
                { id: 'id', labels: ['existing label'], newLabelValue: 'existing label' }
            ]
        };
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id', labels: ['existing label'], newLabelValue: 'existing label' }
            ]
        });
    });

    test('does not add empty label', () => {
        const initialState = {
            items: [
                { id: 'id', labels: ['label 1'], newLabelValue: '' }
            ]
        };
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id', labels: ['label 1'], newLabelValue: '' }
            ]
        });
    });

    test('handles delete label action', () => {
        const initialState = {
            items: [
                { id: 'id', labels: ['label 1', 'label to delete'] },
                { id: 'not modified', labels: ['label 1', 'label 2'] }
            ]
        };
        const action = {
            type: 'DELETE_LABEL',
            transactionId: 'id',
            label: 'label to delete'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id', labels: ['label 1'] },
                { id: 'not modified', labels: ['label 1', 'label 2'] }
            ]
        });
    });

    test('handles set new label value action', () => {
        const initialState = {
            items: [
                { id: 'id' },
                { id: 'not modified', newLabelValue: 'not modified new label' }
            ]
        };
        const action = {
            type: 'SET_NEW_LABEL_VALUE',
            id: 'id',
            value: 'new label'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id', newLabelValue: 'new label' },
                { id: 'not modified', newLabelValue: 'not modified new label' }
            ]
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

    test('handles delete label action', () => {
        const initialState = {
            items: [
                { id: 'id', isLabelsOpen: false },
                { id: 'not modified', isLabelsOpen: true }
            ]
        };
        const action = {
            type: 'TOGGLE_LABELS',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id', isLabelsOpen: true },
                { id: 'not modified', isLabelsOpen: true }
            ]
        });
    });

    test('handles add multiple labels action', () => {
        selectors.filterTransactions = jest.fn(() => {
            return [{ id: 'id 1'}, { id: 'id 2' }];
        });
        const initialState = {
            items: [
                { id: 'id 1', labels: ['new label'] },
                { id: 'id 2', labels: [] },
                { id: 'not modified', labels: ['label 1'] }
            ]
        };
        const action = {
            type: 'ADD_LABEL_MULTIPLE',
            label: 'new label'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id 1', labels: ['new label'] },
                { id: 'id 2', labels: ['new label'] },
                { id: 'not modified', labels: ['label 1'] }
            ]
        });
    });

    test('handles remove multiple labels action', () => {
        selectors.filterTransactions = jest.fn(() => {
            return [{ id: 'id 1'}, { id: 'id 2' }];
        });
        const initialState = {
            items: [
                { id: 'id 1', labels: ['keep label', 'remove label'] },
                { id: 'id 2', labels: ['remove label'] },
                { id: 'not modified', labels: ['label 1'] }
            ]
        };
        const action = {
            type: 'REMOVE_LABEL_MULTIPLE',
            label: 'remove label'
        };

        deepFreeze(initialState);

        expect(transactions(initialState, action)).toEqual({
            items: [
                { id: 'id 1', labels: ['keep label'] },
                { id: 'id 2', labels: [] },
                { id: 'not modified', labels: ['label 1'] }
            ]
        });
    });
});
