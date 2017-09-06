import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/modals/labels';

import Button from 'components/common/button';

const Labels = ({ addLabel, itemCount, labels }) => (
    labels ? (
        <div className="labels-modal-container">
            <h2 className="title">Choose a label to apply:</h2>
            <ul className="labels">
                {labels.map(label => (
                    <li key={label} className="item">
                        <Button
                            isFullSize
                            text={label}
                            onClick={() => {
                                addLabel(label);
                            }} />
                    </li>
                ))}
            </ul>
            <h2 className="item-count">The label will be applied to: {itemCount} items.</h2>
        </div>
    ) : null
);

export default Labels;

Labels.propTypes = {
    addLabel: PropTypes.func,
    itemCount: PropTypes.number,
    labels: PropTypes.array
};
