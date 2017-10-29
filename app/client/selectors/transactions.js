import { createSelector } from 'reselect';

import { NO_LABEL_NAME } from 'constants/labels';
import { transactionTypes } from 'services/parser-service';
import { SORT_TYPES } from '../reducers/sort';
import { getLabels } from './labels';

const getFilter = (state) => state.transactions.filter;

const getTransactionItems = (state) => state.transactions.items;

const getSort = (state) => state.sort;

export const filterTransactions = (filter, transactions, labels) => {
    if (filter) {
        const filterFunction = isFiltered.bind(null, filter, labels);

        return transactions.filter(filterFunction);
    } else {
        return transactions;
    }
};

const isFiltered = (filter, labels, transaction) => {
    const transactionLabels = labels.find(label => label.id === transaction.id);

    return hasLabel(filter, transactionLabels) || hasDescription(filter, transaction);
};

const hasLabel = (filter, labels) => {
    if (filter === NO_LABEL_NAME) {
        return !labels.items || !labels.items.length;
    }

    return labels && labels.items && labels.items.some(label => {
        return label.indexOf(filter) !== -1;
    });
};

const hasDescription = (filter, { description }) => {
    return description && description.toUpperCase().indexOf(filter.toUpperCase()) > -1;
};

export const getTransactions = createSelector(
    [getFilter, getTransactionItems, getLabels, getSort],
    (filter, transactions, labels, sort) => {
        const filteredTransactions = filterTransactions(filter, transactions, labels);

        return sortTransactions(filteredTransactions, sort);
    }
);

export const getTransactionIds = createSelector(
    [getFilter, getTransactionItems, getLabels],
    (filter, transactions, labels) => {
        return filterTransactions(filter, transactions, labels)
            .map(({ id }) => id);
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

export const getTransactionsCount = createSelector(
    [getFilter, getTransactionItems, getLabels],
    (filter, transactions, labels) => {
        return filterTransactions(filter, transactions, labels).length;
    }
);

export const getLabelsStats = createSelector(
    [getFilter, getTransactionItems, getLabels],
    (filter, transactions, labels) => {
        const filteredTransactions = filterTransactions(filter, transactions, labels);

        let withoutLabel = {
            label: NO_LABEL_NAME,
            itemCount: 0,
            amountSummary: 0
        };

        const labelsGroup = filteredTransactions.reduce((_labelsGroup, transaction) => {
            const { amount, transactionType } = transaction;
            const _labels = labels.find(label => label.id === transaction.id);
            const signedAmount = getSignedAmount(transactionType, amount);

            if (_labels && _labels.items && _labels.items.length) {
                _labels.items.forEach(label => {
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
