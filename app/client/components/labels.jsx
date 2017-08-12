import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/labels';

import LabelItem from './label-item';
import IconButton from './icon-button';

const Labels = ({ labels }) => (
    <div className="labels-container">
        <ul className="labels">
            {labels.map((label, index) => 
            <li key={index}>
                <LabelItem {...label} />
            </li>
            )}
        </ul>
        <IconButton type="plus" />
    </div>
);

export default Labels;

Labels.defaultProps = {
    labels: []
};

Labels.propTypes = {
    labels: PropTypes.array
};
