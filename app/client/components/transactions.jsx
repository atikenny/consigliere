import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/components/transactions';

import TransactionItem from './transaction-item';
import TransactionFooter from './transaction-footer';
import Labels from './labels';

const Transactions = ({ transactions }) => (
    <div className="transactions-container">
        <ul>
            {transactions.map((transaction, index) => (
                <li key={index}>
                    <TransactionItem {...transaction} />
                    <TransactionFooter />
                    <Labels labels={transaction.labels} />
                </li>
            ))}
        </ul>
    </div>
);

const mapState = ({ transactions }) => {
    return {
        transactions
    };
};

export default connect(mapState)(Transactions);

Transactions.defaultProps = {
    transactions: []
};

Transactions.propTypes = {
    transactions: PropTypes.array
};
