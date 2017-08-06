import React from 'react';

const TransactionItem = ({ date }) => (
    <div className="transaction-item">
        <div className="date">{date}</div>
    </div>
);

export default TransactionItem;
