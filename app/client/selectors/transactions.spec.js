import * as reselect from 'reselect';
import { mockCreateSelector } from 'test-helpers/redux/reselect';

import { NO_LABEL_NAME } from 'constants/labels';
import { transactionTypes } from 'services/parser-service';

describe('transactions selector', () => {
    beforeEach(() => {
        reselect.createSelector = mockCreateSelector();
    });

    describe('getTransactions()', () => {
        test('returns transactions when filter is not provided', () => {
            // GIVEN
            const transactions = 'transactions';
            const getTransactions = require('./transactions').getTransactions;

            // WHEN
            const result = getTransactions(undefined, transactions);

            // THEN
            expect(result).toBe(transactions);
        });

        test('filters transactions by the label provided', () => {
            // GIVEN
            const nonMatching = { id: 'not matching' };
            const nonMatchingLabels = {
                id: 'not matching',
                items: ['no matches']
            };
            const matching = { id: 'matching', };
            const matchingLabels = {
                id: 'matching',
                items: ['matching']
            };
            const transactions = [nonMatching, matching];
            const labels = [nonMatchingLabels, matchingLabels];
            const getTransactions = require('./transactions').getTransactions;

            // WHEN
            const result = getTransactions('matching', transactions, labels);

            // THEN
            expect(result).toEqual([matching]);
        });

        test('filters transactions without label', () => {
            // GIVEN
            const labeled = { id: 'with labels' };
            const labeledLabels = { id: 'with labels', items: ['dont care'] };
            const empty = { id: 'with empty labels' };
            const emptyLabels = { id: 'with empty labels', items: [] };
            const without = { id: 'without labels' };
            const withoutLabels = { id: 'without labels' };
            
            const transactions = [labeled, empty, without];
            const labels = [labeledLabels, emptyLabels, withoutLabels];
            
            const getTransactions = require('./transactions').getTransactions;

            // WHEN
            const result = getTransactions(NO_LABEL_NAME, transactions, labels);

            // THEN
            expect(result).toEqual([empty, without]);
        });

        test('filters transactions by the description provided', () => {
            // GIVEN
            const nonMatching = { description: 'not matching' };
            const matching = { description: 'matched' };
            const transactions = [nonMatching, matching];
            const getTransactions = require('./transactions').getTransactions;
            const labels = [];

            // WHEN
            const result = getTransactions('matched', transactions, labels);

            // THEN
            expect(result).toEqual([matching]);
        });

        test('filters transactions by the description provided (case insensitive)', () => {
            // GIVEN
            const nonMatching = { description: 'not matching' };
            const matching = { description: 'mAtchEd' };
            const transactions = [nonMatching, matching];
            const getTransactions = require('./transactions').getTransactions;
            const labels = [];

            // WHEN
            const result = getTransactions('matched', transactions, labels);

            // THEN
            expect(result).toEqual([matching]);
        });
    });

    test('getTransactionsCount()', () => {
        // GIVEN
        const transactions = [1, 2, 3];
        const getTransactionsCount = require('./transactions').getTransactionsCount;

        // WHEN
        const result = getTransactionsCount(undefined, transactions);

        // THEN
        expect(result).toBe(transactions.length);
    });

    test('getLabelsStats return labels stats for the transactions', () => {
        // GIVEN
        const transactions = [
            { id: 'id 1', amount: 1, labels: ['label 1'] },
            { id: 'id 2', amount: 1, labels: ['label 2'] },
            { id: 'id 3', amount: 1, labels: ['label 1', 'label 2', 'label 3'] },
            { id: 'id 4', amount: 1, labels: [] }
        ];
        const labels = [
            { id: 'id 1', items: ['label 1'] },
            { id: 'id 2', items: ['label 2'] },
            { id: 'id 3', items: ['label 1', 'label 2', 'label 3'] },
            { id: 'id 4', items: [] }
        ];
        const getLabelsStats = require('./transactions').getLabelsStats;

        // WHEN
        const result = getLabelsStats(undefined, transactions, labels);

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
            { id: 'id 1', amount: 2 },
            { id: 'id 2', amount: 1, transactionType: transactionTypes.credit },
            { id: 'id 3', amount: 1, transactionType: transactionTypes.income }
        ];
        const labels = [
            { id: 'id 1', items: ['label 1'] },
            { id: 'id 2', items: ['label 1'] },
            { id: 'id 3', items: ['label 1'] }
        ];
        const getLabelsStats = require('./transactions').getLabelsStats;

        // WHEN
        const result = getLabelsStats(undefined, transactions, labels);

        // THEN
        expect(result).toEqual([
            { label: 'label 1', amountSummary: 0, itemCount: 3 }
        ]);
    });

    test('getLabelsStats return labels stats for the filtered transactions', () => {
        // GIVEN
        const transactions = [
            { id: 'id 1', amount: 1 },
            { id: 'id 2', amount: 1 },
            { id: 'id 3', amount: 1 },
            { id: 'id 4', amount: 1 }
        ];
        const labels = [
            { id: 'id 1', items: ['label 1'] },
            { id: 'id 2', items: ['label 2'] },
            { id: 'id 3', items: ['label 1', 'label 2', 'label 3'] },
            { id: 'id 4', items: [] }
        ];
        const getLabelsStats = require('./transactions').getLabelsStats;

        // WHEN
        const result = getLabelsStats('label 1', transactions, labels);

        // THEN
        expect(result).toEqual([
            { label: 'label 1', amountSummary: 2, itemCount: 2 },
            { label: 'label 2', amountSummary: 1, itemCount: 1 },
            { label: 'label 3', amountSummary: 1, itemCount: 1 }
        ]);
    });
});
