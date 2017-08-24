import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/labels';

import LabelItem from './label-item';
import IconButton from './icon-button';
import LabelInput from 'containers/label-input';

const Labels = ({ labels, transactionId, onClick }) => (
    <div className="labels-container">
        <ul className="labels">
            {labels.map((label, index) => 
                <li key={index}>
                    <LabelItem name={label} />
                </li>
            )}
        </ul>
        <IconButton
            type="plus"
            onClick={onClick} />
        <LabelInput transactionId={transactionId} />
    </div>
);

export default Labels;

Labels.defaultProps = {
    labels: [],
    onClick: () => {}
};

Labels.propTypes = {
    labels: PropTypes.array,
    onClick: PropTypes.func,
    transactionId: PropTypes.number.isRequired
};
