import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/icon-button';

const IconButton = ({ onClick, text, type }) => (
    <button
        className={`icon button ${type}`}
        onClick={onClick}>{text}</button>
);

export default IconButton;

IconButton.defaultProps = {
    onClick: undefined,
    text: ''
};

IconButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string.isRequired
};
