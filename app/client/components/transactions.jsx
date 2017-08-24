import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/transactions';

import TransactionItem from 'containers/transaction-item';
import TransactionFooter from './transaction-footer';
import Labels from './labels';

const Transactions = ({ transactions }) => (
    <div className="transactions-container">
        {transactions && (
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <TransactionItem {...transaction} />
                        <TransactionFooter />
                        <Labels labels={transaction.labels} />
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default Transactions;

Transactions.defaultProps = {
    transactions: undefined
};

Transactions.propTypes = {
    transactions: PropTypes.array
};
