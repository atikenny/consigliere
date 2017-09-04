import { createSelector } from 'reselect';

const hasLabel = (filter, transaction) => {
    return transaction.labels && transaction.labels.some(label => {
        return label.indexOf(filter) !== -1;
    });
};

const hasDescription = (filter, { description }) => {
    return description && description.toUpperCase() === filter.toUpperCase();
};

const isFiltered = (filter, transaction) => {
    return hasLabel(filter, transaction) || hasDescription(filter, transaction);
};

const getFilter = (state) => state.transactions.filter;

export const getTransactions = (state) => state.transactions.items;

export const getFilteredTransactions = createSelector(
    [getFilter, getTransactions],
    (filter, transactions) => {
        if (filter) {
            const filterFunction = isFiltered.bind(null, filter);

            return transactions.filter(filterFunction);
        } else {
            return transactions;
        }
    }
);

export const getLabels = createSelector(
    [getTransactions],
    (transactions) => {
        return transactions.reduce((labels, transaction) => {
            const concatLabels = labels.concat(transaction.labels || []);
            const uniqueLabels = new Set(concatLabels);

            return Array.from(uniqueLabels);
        }, []);
    }
);
