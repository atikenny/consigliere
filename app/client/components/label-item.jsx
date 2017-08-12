import React from 'react';
import PropTypes from 'prop-types';

const LabelItem = ({ name }) => (
    <div className="label">{name}</div>
);

export default LabelItem;

LabelItem.propTypes = {
    name: PropTypes.string.isRequired
};
