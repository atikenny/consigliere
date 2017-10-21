import { createSelector } from 'reselect';

import { transactionTypes } from 'services/parser-service';
import { NO_LABEL_NAME } from 'constants/labels';
import { SORT_TYPES } from '../reducers/sort';

const getFilter = (state) => state.transactions.filter;

const getTransactionItems = (state) => state.transactions.items;

const getSort = (state) => state.sort;

export const filterTransactions = (filter, transactions) => {
    if (filter) {
        const filterFunction = isFiltered.bind(null, filter);

        return transactions.filter(filterFunction);
    } else {
        return transactions;
    }
};

const isFiltered = (filter, transaction) => {
    return hasLabel(filter, transaction) || hasDescription(filter, transaction);
};

const hasLabel = (filter, transaction) => {
    if (filter === NO_LABEL_NAME) {
        return !transaction.labels || !transaction.labels.length;
    }

    return transaction.labels && transaction.labels.some(label => {
        return label.indexOf(filter) !== -1;
    });
};

const hasDescription = (filter, { description }) => {
    return description && description.toUpperCase().indexOf(filter.toUpperCase()) > -1;
};

export const getTransactions = createSelector(
    [getFilter, getTransactionItems, getSort],
    (filter, transactions, sort) => {
        const filteredTransactions = filterTransactions(filter, transactions);

        return sortTransactions(filteredTransactions, sort);
    }
);

const sortTransactions = (transactions, sort) => {
    switch (sort) {
        case SORT_TYPES.BY_DATE:
            return transactions.sort(sortByDate);
        case SORT_TYPES.DEFAULT:
        default:
            return transactions;
    }
};

const sortByDate = (a, b) => {
    return new Date(a.date) - new Date(b.date);
};

export const getLabels = createSelector(
    [getTransactionItems],
    (transactions) => {
        const labels = transactions.reduce((_labels, transaction) => {
            const concatLabels = _labels.concat(transaction.labels || []);
            const uniqueLabels = Array.from(new Set(concatLabels));


            return uniqueLabels;
        }, []);
        
        labels.push(NO_LABEL_NAME);

        return labels;
    }
);

export const getTransactionsCount = createSelector(
    [getFilter, getTransactionItems],
    (filter, transactions) => {
        return filterTransactions(filter, transactions).length;
    }
);

export const getLabelsStats = createSelector(
    [getFilter, getTransactionItems],
    (filter, transactions) => {
        const filteredTransactions = filterTransactions(filter, transactions);

        let withoutLabel = {
            label: NO_LABEL_NAME,
            itemCount: 0,
            amountSummary: 0
        };

        const labelsGroup = filteredTransactions.reduce((_labelsGroup, transaction) => {
            const { labels, amount, transactionType } = transaction;
            const signedAmount = getSignedAmount(transactionType, amount);

            if (labels && labels.length) {
                labels.forEach(label => {
                    const labelGroup = _labelsGroup.find(group => group.label === label);

                    if (!labelGroup) {
                        _labelsGroup.push({
                            label,
                            itemCount: 1,
                            amountSummary: signedAmount
                        });
                    } else {
                        labelGroup.itemCount++;
                        labelGroup.amountSummary += signedAmount;
                    }
                });
            } else {
                withoutLabel.itemCount++;
                withoutLabel.amountSummary += signedAmount;
            }

            return _labelsGroup;
        }, []);

        if (withoutLabel.itemCount) {
            labelsGroup.push(withoutLabel);
        }

        const sorterFunction = sortByStringProperty('label');

        return labelsGroup.sort(sorterFunction);
    }
);

const getSignedAmount = (transactionType, amount) => {
    switch (transactionType) {
        case transactionTypes.credit:
        case transactionTypes.income:
            return -1 * amount;
        default:
            return amount;
    }
};

const sortByStringProperty = (propertyName) => {
    return (a, b) => {
        if (a[propertyName] < b[propertyName]) {
            return -1;
        }

        if (a[propertyName] > b[propertyName]) {
            return 1;
        }

        return 0;
    };
};
