import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/labels';

import LabelItem from 'containers/labels/label-item';
import LabelInput from 'containers/labels/label-input';

const Labels = ({ labels, transactionId, onClick }) => (
    <div className="labels-container">
        {labels && (
            <ul className="labels">
                {labels.map((label, index) => (
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
);

export default Labels;

Labels.propTypes = {
    labels: PropTypes.array,
    onClick: PropTypes.func,
    transactionId: PropTypes.string
};
