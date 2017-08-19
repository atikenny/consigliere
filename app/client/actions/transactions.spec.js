import {
    addLabel,
    load
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
        const label = 'label';

        expect(addLabel(id, label)).toEqual({
            type: 'ADD_LABEL',
            id,
            label
        })
    });
});
