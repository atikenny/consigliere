import React from 'react';
import { connect } from 'react-redux';

import Transactions from 'components/transactions';

const hasLabel = (filter, transaction) => {
    return transaction.labels && transaction.labels.some(label => {
        return label.indexOf(filter) !== -1;
    });
};

const mapState = ({ transactions, filter }) => {
    const hasLabelFilter = hasLabel.bind(null, filter);
    let filteredTransactions;

    if (filter) {
        filteredTransactions = transactions.filter(hasLabelFilter);
    } else {
        filteredTransactions = transactions;
    }

    return {
        transactions: filteredTransactions
    };
};

export default connect(mapState)(Transactions);
