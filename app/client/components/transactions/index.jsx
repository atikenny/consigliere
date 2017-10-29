import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/transactions';

import TransactionItem from 'containers/transactions/transaction-item';
import TransactionFooter from 'containers/transactions/transaction-footer';
import Labels from 'containers/labels';

const Transactions = ({ transactions }) => (
    <div className="transactions-container">
        {transactions && (
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <TransactionItem {...transaction} />
                        <TransactionFooter
                            transactionId={transaction.id}
                            description={transaction.description}
                            similarCount={transaction.similarCount} />
                        <Labels transactionId={transaction.id} />
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default Transactions;

Transactions.propTypes = {
    transactions: PropTypes.array
};
