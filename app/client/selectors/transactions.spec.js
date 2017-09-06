import * as reselect from 'reselect';

describe('transactions selector', () => {
    beforeEach(() => {
        reselect.createSelector = jest.fn((inputSelectors, resultFunc) => {
            return resultFunc;
        });
    });

    test('getTransactions returns transaction items', () => {
        const getTransactions = require('./transactions').getTransactions;
        const items = 'items';
        const state = { transactions: { items } };

        expect(getTransactions(state)).toBe(items);
    });

    describe('getFilteredTransactions()', () => {
        test('returns transactions when filter is not provided', () => {
            // GIVEN
            const transactions = 'transactions';
            const getFilteredTransactions = require('./transactions').getFilteredTransactions;

            // WHEN
            const result = getFilteredTransactions(undefined, transactions);

            // THEN
            expect(result).toBe(transactions);
        });

        test('filters transactions by the label provided', () => {
            // GIVEN
            const nonMatching = { labels: ['no matches'] };
            const matching = { labels: ['matched'] };
            const transactions = [nonMatching, matching];
            const getFilteredTransactions = require('./transactions').getFilteredTransactions;

            // WHEN
            const result = getFilteredTransactions('matched', transactions);

            // THEN
            expect(result).toEqual([matching]);
        });

        test('filters transactions by the description provided', () => {
            // GIVEN
            const nonMatching = { description: 'not matching' };
            const matching = { description: 'matched' };
            const transactions = [nonMatching, matching];
            const getFilteredTransactions = require('./transactions').getFilteredTransactions;

            // WHEN
            const result = getFilteredTransactions('matched', transactions);

            // THEN
            expect(result).toEqual([matching]);
        });

        test('filters transactions by the description provided (case insensitive)', () => {
            // GIVEN
            const nonMatching = { description: 'not matching' };
            const matching = { description: 'mAtchEd' };
            const transactions = [nonMatching, matching];
            const getFilteredTransactions = require('./transactions').getFilteredTransactions;

            // WHEN
            const result = getFilteredTransactions('matched', transactions);

            // THEN
            expect(result).toEqual([matching]);
        });
    });
});
