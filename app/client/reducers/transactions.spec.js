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
