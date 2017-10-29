import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/modals/labels';

import IconButton from 'components/common/icon-button';

const Labels = ({ addLabel, itemCount, labels, removeLabel, showLabel, transactionIds }) => (
    <div className="labels-modal-container">
        <h2>Choose a label to view, remove or apply:</h2>
        <ul className="labels">
            {labels.map(label => (
                <li key={label} className="item">
                    <span className="text">{label}</span>
                    <IconButton
                        type="eye"
                        onClick={() => {
                            showLabel(label);
                        }} />
                    <IconButton
                        type="minus"
                        onClick={() => {
                            removeLabel(label, transactionIds);
                        }} />
                    <IconButton
                        type="plus"
                        onClick={() => {
                            addLabel(label, transactionIds);
                        }} />
                </li>
            ))}
        </ul>
        <h2>The changes will affect {itemCount} items.</h2>
    </div>
);

export default Labels;

Labels.propTypes = {
    addLabel: PropTypes.func,
    itemCount: PropTypes.number,
    labels: PropTypes.array,
    removeLabel: PropTypes.func,
    showLabel: PropTypes.func,
    transactionIds: PropTypes.arrayOf(PropTypes.string)
};
