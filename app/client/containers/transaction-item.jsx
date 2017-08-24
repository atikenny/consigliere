import React from 'react';
import { connect } from 'react-redux';

import TransactionItem from 'components/transaction-item';

const mapState = ({ currency }) => {
    return {
        currency
    };
};

export default connect(mapState)(TransactionItem);
