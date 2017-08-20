import React from 'react';
import { connect } from 'react-redux';

import Transactions from '../components/transactions';

const mapState = ({ transactions }) => {
    return {
        transactions
    };
};

export default connect(mapState)(Transactions);
