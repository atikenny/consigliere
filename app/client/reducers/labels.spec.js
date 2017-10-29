import deepFreeze from 'deep-freeze';

import labels from './labels';

describe('labels reducers', () => {
    test('handles add label action', () => {
        const initialState = [
            {
                id: 'id',
                newLabelValue: 'new label',
                items: []
            },
            {
                id: 'no action'
            }
        ];
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(labels(initialState, action)).toEqual([
            {
                id: 'id',
                items: ['new label'],
                newLabelValue: 'new label'
            },
            {
                id: 'no action'
            }
        ]);
    });

    test('does not add existing label', () => {
        const initialState = [
            {
                id: 'id',
                items: ['existing label'],
                newLabelValue: 'existing label'
            }
        ];
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(labels(initialState, action)).toEqual([
            {
                id: 'id',
                items: ['existing label'],
                newLabelValue: 'existing label'
            }
        ]);
    });

    test('does not add empty label', () => {
        const initialState = [
            {
                id: 'id',
                items: ['label 1'],
                newLabelValue: ''
            }
        ];
        const action = {
            type: 'ADD_LABEL',
            id: 'id'
        };

        deepFreeze(initialState);

        expect(labels(initialState, action)).toEqual([
            {
                id: 'id',
                items: ['label 1'],
                newLabelValue: ''
            }
        ]);
    });

    test('handles delete label action', () => {
        const initialState = [
            {
                id: 'id',
                items: ['label 1', 'label to delete']
            },
            {
                id: 'not modified',
                items: ['label 1', 'label 2']
            }
        ];
        const action = {
            type: 'DELETE_LABEL',
            transactionId: 'id',
            label: 'label to delete'
        };

        deepFreeze(initialState);

        expect(labels(initialState, action)).toEqual([
            {
                id: 'id',
                items: ['label 1']
            },
            {
                id: 'not modified',
                items: ['label 1', 'label 2']
            }
        ]);
    });

    test('handles set new label value action', () => {
        const initialState = [
            {
                id: 'id',
                newLabelValue: ''
            },
            {
                id: 'not modified',
                newLabelValue: 'not modified new label'
            }
        ];
        const action = {
            type: 'SET_NEW_LABEL_VALUE',
            id: 'id',
            value: 'new label'
        };

        deepFreeze(initialState);

        expect(labels(initialState, action)).toEqual([
            {
                id: 'id',
                newLabelValue: 'new label'
            },
            {
                id: 'not modified',
                newLabelValue: 'not modified new label'
            }
        ]);
    });

    test('handles add multiple labels action', () => {
        const initialState = [
            { id: 'id 1', items: ['new label'] },
            { id: 'id 2', items: [] },
            { id: 'not modified', items: ['label 1'] }
        ];
        const action = {
            type: 'ADD_LABEL_MULTIPLE',
            label: 'new label',
            transactionIds: ['id 1', 'id 2']
        };

        deepFreeze(initialState);

        expect(labels(initialState, action)).toEqual([
            { id: 'id 1', items: ['new label'] },
            { id: 'id 2', items: ['new label'] },
            { id: 'not modified', items: ['label 1'] }
        ]);
    });

    test('handles remove multiple labels action', () => {
        const initialState = [
            { id: 'id 1', items: ['keep label', 'remove label'] },
            { id: 'id 2', items: ['remove label'] },
            { id: 'not modified', items: ['label 1'] }
        ];
        const action = {
            type: 'REMOVE_LABEL_MULTIPLE',
            label: 'remove label',
            transactionIds: ['id 1', 'id 2']
        };

        deepFreeze(initialState);

        expect(labels(initialState, action)).toEqual([
            { id: 'id 1', items: ['keep label'] },
            { id: 'id 2', items: [] },
            { id: 'not modified', items: ['label 1'] }
        ]);
    });
});
