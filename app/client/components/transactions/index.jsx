import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/transactions';

import TransactionItem from 'containers/transactions/transaction-item';
import TransactionFooter from 'containers/transactions/transaction-footer';
import Labels from 'containers/labels';

const getContainerClassName = (isModalActive) => {
    let containerClassName = 'transactions-container';

    if (isModalActive) {
        containerClassName += ` hide`;
    }

    return containerClassName;
};

const Transactions = ({ isModalActive, transactions }) => (
    <div className={getContainerClassName(isModalActive)}>
        {transactions && (
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <TransactionItem {...transaction} />
                        <TransactionFooter
                            transactionId={transaction.id}
                            description={transaction.description}
                            isLabelsOpen={transaction.isLabelsOpen}
                            similarCount={transaction.similarCount} />
                        {transaction.isLabelsOpen && (
                            <Labels
                                labels={transaction.labels}
                                newLabelValue={transaction.newLabelValue}
                                transactionId={transaction.id} />
                        )}
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default Transactions;

Transactions.propTypes = {
    isModalActive: PropTypes.bool,
    transactions: PropTypes.array
};
