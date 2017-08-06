import React from 'react';
import { connect } from 'react-redux';

import TransactionItem from './transaction-item';

const Transactions = ({ transactions }) => (
    <div className="transaction-container">
        <ul>
            {transactions.map((transaction, index) => (
                <li key={index}>
                    <TransactionItem {...transaction} />
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
