import React from 'react';
import PropTypes from 'prop-types';

const Labels = ({ labels }) => (
    <div className="labels-modal-container">
        <h2 className="title">Choose a label to apply:</h2>
        <ul className="labels">
            {labels.map(label => (
                <li key={label} className="item">{label}</li>
            ))}
        </ul>
    </div>
);

export default Labels;

Labels.propTypes = {
    labels: PropTypes.array
};
