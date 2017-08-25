import {
    addLabel,
    load,
    deleteLabel,
    setNewLabelValue
} from './transactions';

describe('transactions', () => {
    test('load returns action object', () => {
        const transactions = 'transactions';

        expect(load(transactions)).toEqual({
            type: 'LOAD_TRANSACTIONS',
            transactions
        });
    });

    test('add label returns action object', () => {
        const id = 'id';

        expect(addLabel(id)).toEqual({
            type: 'ADD_LABEL',
            id
        })
    });

    test('delete label returns action object', () => {
        const transactionId = 'transactionId';
        const label = 'label';

        expect(deleteLabel(transactionId, label)).toEqual({
            type: 'DELETE_LABEL',
            transactionId,
            label
        })
    });

    test('set new label value returns action object', () => {
        const id = 'id';
        const value = 'value';

        expect(setNewLabelValue(id, value)).toEqual({
            type: 'SET_NEW_LABEL_VALUE',
            id,
            value
        })
    });
});
