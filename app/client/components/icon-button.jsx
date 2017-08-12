import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/icon-button';

const IconButton = ({ text, type }) => (
    <button className={`icon button ${type}`}>{text}</button>
);

export default IconButton;

IconButton.defaultProps = {
    text: ''
};

IconButton.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string.isRequired
};
