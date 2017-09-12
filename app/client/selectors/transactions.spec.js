import * as reselect from 'reselect';
import { mockCreateSelector } from 'test-helpers/redux/reselect';

import { NO_LABEL_NAME } from 'constants/labels';
import { transactionTypes } from 'services/parser-service';

describe('transactions selector', () => {
    beforeEach(() => {
        reselect.createSelector = mockCreateSelector();
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

        test('filters transactions without label', () => {
            // GIVEN
            const withLabels = { labels: ['label 1', 'label 2'] };
            const withEmptyLabels = { labels: [] };
            const withoutLabels = {};
            const transactions = [withLabels, withEmptyLabels, withoutLabels];
            const getFilteredTransactions = require('./transactions').getFilteredTransactions;

            // WHEN
            const result = getFilteredTransactions(NO_LABEL_NAME, transactions);

            // THEN
            expect(result).toEqual([withEmptyLabels, withoutLabels]);
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

    test('getLabels returns unique labels', () => {
        const getLabels = require('./transactions').getLabels;
        const transactions = [
            {},
            { labels: [] },
            { labels: ['label 1', 'label 2'] },
            { labels: ['label 2'] }
        ];

        expect(getLabels(transactions)).toEqual(['label 1', 'label 2', NO_LABEL_NAME]);
    });

    test('getFilteredTransactionsCount()', () => {
        // GIVEN
        const transactions = [1, 2, 3];
        const getFilteredTransactionsCount = require('./transactions').getFilteredTransactionsCount;

        // WHEN
        const result = getFilteredTransactionsCount(undefined, transactions);

        // THEN
        expect(result).toBe(transactions.length);
    });

    test('getLabelsStats return labels stats for the transactions', () => {
        // GIVEN
        const transactions = [
            { amount: 1, labels: ['label 1'] },
            { amount: 1, labels: ['label 2'] },
            { amount: 1, labels: ['label 1', 'label 2', 'label 3'] },
            { amount: 1, labels: [] }
        ];
        const getLabelsStats = require('./transactions').getLabelsStats;

        // WHEN
        const result = getLabelsStats(undefined, transactions);

        // THEN
        expect(result).toEqual([
            { label: NO_LABEL_NAME, amountSummary: 1, itemCount: 1 },
            { label: 'label 1', amountSummary: 2, itemCount: 2 },
            { label: 'label 2', amountSummary: 2, itemCount: 2 },
            { label: 'label 3', amountSummary: 1, itemCount: 1 }
        ]);
    });

    test('getLabelsStats return handles credit and income', () => {
        // GIVEN
        const transactions = [
            { amount: 2, labels: ['label 1'] },
            { amount: 1, labels: ['label 1'], transactionType: transactionTypes.credit },
            { amount: 1, labels: ['label 1'], transactionType: transactionTypes.income }
        ];
        const getLabelsStats = require('./transactions').getLabelsStats;

        // WHEN
        const result = getLabelsStats(undefined, transactions);

        // THEN
        expect(result).toEqual([
            { label: 'label 1', amountSummary: 0, itemCount: 3 }
        ]);
    });

    test('getLabelsStats return labels stats for the filtered transactions', () => {
        // GIVEN
        const transactions = [
            { amount: 1, labels: ['label 1'] },
            { amount: 1, labels: ['label 2'] },
            { amount: 1, labels: ['label 1', 'label 2', 'label 3'] },
            { amount: 1, labels: [] }
        ];
        const getLabelsStats = require('./transactions').getLabelsStats;

        // WHEN
        const result = getLabelsStats('label 1', transactions);

        // THEN
        expect(result).toEqual([
            { label: 'label 1', amountSummary: 2, itemCount: 2 },
            { label: 'label 2', amountSummary: 1, itemCount: 1 },
            { label: 'label 3', amountSummary: 1, itemCount: 1 }
        ]);
    });
});
