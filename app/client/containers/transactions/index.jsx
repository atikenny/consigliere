import React from 'react';
import { connect } from 'react-redux';

import Transactions from 'components/transactions';
import { getFilteredTransactions } from 'selectors/transactions';

const mapState = (state) => {
    return {
        transactions: getFilteredTransactions(state)
    };
};

export default connect(mapState)(Transactions);
