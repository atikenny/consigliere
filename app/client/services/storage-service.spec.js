import {
    storeTransactions,
    loadState,
    initAutoSave
} from './storage-service';

describe('storage-service', () => {
    test('loadState method retreives state from storage', () => {
        // GIVEN
        const state = { transaction: 'mock transaction' };
        global.localStorage = {
            getItem: () => JSON.stringify(state)
        };

        // WHEN
        const loadedState = loadState();

        // THEN
        expect(loadedState).toEqual(state);
    });

    test('loadState method does not throw when state is not parseable', () => {
        // GIVEN
        global.localStorage = {
            getItem: () => '{cannot parse this'
        };

        // WHEN
        const state = loadState();

        // THEN
        expect(state).toEqual(undefined);
    });

    test('initAutoSave', () => {
        const mockSetItem = jest.fn();
        global.localStorage = {
            setItem: mockSetItem
        };
        let triggerPublish;
        const mockState = { transactions: 'transactions' };
        const subscribeSpy = jest.fn((handler) => {
            triggerPublish = handler;
        });
        const store = {
            subscribe: subscribeSpy,
            getState: () => mockState
        };

        // WHEN
        initAutoSave(store);

        // THEN
        expect(subscribeSpy.mock.calls.length).toBe(1);

        // WHEN
        triggerPublish();

        // THEN
        expect(mockSetItem.mock.calls[0]).toEqual([
            'CONSIGLIERE',
            JSON.stringify(mockState)
        ]);
    });
});
