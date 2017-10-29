import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/labels';

import LabelItem from 'containers/labels/label-item';
import LabelInput from 'containers/labels/label-input';

const Labels = ({ isOpen, items, transactionId, onClick }) => (
    isOpen && (
        <div className="labels-container">
            {items && (
                <ul className="labels">
                    {items.map((label, index) => (
                        <li key={index}>
                            <LabelItem
                                name={label}
                                transactionId={transactionId} />
                        </li>
                    ))}
                </ul>
            )}
            <div className="add-label-container">
                <LabelInput
                    transactionId={transactionId}
                    onClick={onClick} />
            </div>
        </div>
    ) || null
);

export default Labels;

Labels.propTypes = {
    isOpen: PropTypes.bool,
    items: PropTypes.array,
    onClick: PropTypes.func,
    transactionId: PropTypes.string
};
