import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'services/date-service';
import { transactionTypes } from 'services/parser-service';

const positiveTransactionTypes = [transactionTypes.credit, transactionTypes.income];
const getClassName = (transactionType) => {
    let className = 'transaction-item';

    if (positiveTransactionTypes.includes(transactionType)) {
        className += ' credit';
    }

    return className;
};

const TransactionItem = ({ amount, currency, date, description, transactionType }) => (
    <div className={getClassName(transactionType)}>
        <div className="row">
            <div className="description">{description}</div>
            <div className="date">{formatDate(date)}</div>
        </div>
        <div className="row">
            <div className="amount">{`${currency} ${amount}`}</div>
        </div>
    </div>
);

export default TransactionItem;

TransactionItem.defaultProps = {
    description: ''
};

TransactionItem.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    transactionType: PropTypes.string
};
