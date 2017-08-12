import { storeTransactions, loadState } from './storage-service';

describe('storage-service', () => {
    test('storeTransactions method stores data as stringified JSON', () => {
        // GIVEN
        const mockSetItem = jest.fn();
        global.localStorage = {
            setItem: mockSetItem
        };

        const transactions = [{ transaction: 'mock transaction' }];

        // WHEN
        storeTransactions(transactions);

        // THEN
        expect(mockSetItem.mock.calls[0]).toEqual([
            'CONSIGLIERE.TRANSACTIONS',
            JSON.stringify(transactions)
        ]);
    });

    test('loadState method retreives state from storage', () => {
        // GIVEN
        const transactions = [{ transaction: 'mock transaction' }];
        global.localStorage = {
            getItem: () => JSON.stringify(transactions)
        };

        // WHEN
        const state = loadState();

        // THEN
        expect(state).toEqual({ transactions });
    });

    test('loadState method does not throw when state is not parseable', () => {
        // GIVEN
        global.localStorage = {
            getItem: () => '{cannot parse this'
        };

        // WHEN
        const state = loadState();

        // THEN
        expect(state).toEqual({});
    });
});
