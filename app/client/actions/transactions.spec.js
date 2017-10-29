import {
    deleteItem,
    load,
    setFilter
} from './transactions';

describe('transactions actions', () => {
    test('load returns action object', () => {
        const transactions = 'transactions';

        expect(load(transactions)).toEqual({
            type: 'LOAD_TRANSACTIONS',
            transactions
        });
    });

    test('delete item returns action object', () => {
        const id = 'id';

        expect(deleteItem(id)).toEqual({
            type: 'DELETE_TRANSACTION',
            id
        });
    });

    test('set filter returns action object', () => {
        const filter = 'filter';

        expect(setFilter(filter)).toEqual({
            type: 'SET_FILTER',
            filter
        });
    });
});
