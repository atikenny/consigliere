import { createSelector } from 'reselect';
import { NO_LABEL_NAME } from 'constants/labels';

const getFilter = (state) => state.transactions.filter;

export const getTransactions = (state) => state.transactions.items;

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

export const getFilteredTransactions = createSelector(
    [getFilter, getTransactions],
    filterTransactions
);

export const getLabels = createSelector(
    [getTransactions],
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

export const getFilteredTransactionsCount = createSelector(
    [getFilter, getTransactions],
    (filter, transactions) => {
        return filterTransactions(filter, transactions).length;
    }
);

export const getLabelsStats = createSelector(
    [getFilter, getTransactions],
    (filter, transactions) => {
        const filteredTransactions = filterTransactions(filter, transactions);

        let withoutLabel = {
            label: NO_LABEL_NAME,
            itemCount: 0,
            amountSummary: 0
        };

        const labelsGroup = filteredTransactions.reduce((_labelsGroup, transaction) => {
            const { labels, amount } = transaction;

            if (labels && labels.length) {
                labels.forEach(label => {
                    const labelGroup = _labelsGroup.find(group => group.label === label);

                    if (!labelGroup) {
                        _labelsGroup.push({
                            label,
                            itemCount: 1,
                            amountSummary: amount
                        });
                    } else {
                        labelGroup.itemCount++;
                        labelGroup.amountSummary += amount;
                    }
                });
            } else {
                withoutLabel.itemCount++;
                withoutLabel.amountSummary += amount;
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
