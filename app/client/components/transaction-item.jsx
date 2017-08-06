import React from 'react';

const TransactionItem = ({ date }) => (
    <div className="transaction-item">
        <div className="date">{new Date(date).toDateString()}</div>
    </div>
);

export default TransactionItem;
