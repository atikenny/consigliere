import { createSelector } from 'reselect';

const hasLabel = (filter, transaction) => {
    return transaction.labels && transaction.labels.some(label => {
        return label.indexOf(filter) !== -1;
    });
};

const getFilter = (state) => state.transactions.filter;

export const getTransactions = (state) => state.transactions.items;

export const getFilteredTransactions = createSelector([getFilter, getTransactions], (filter, transactions) => {
    if (filter) {
        const hasLabelFilter = hasLabel.bind(null, filter);

        return transactions.filter(hasLabelFilter);
    } else {
        return transactions;
    }
});
