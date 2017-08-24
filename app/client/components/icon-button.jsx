import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/icon-button';

const IconButton = ({ onClick, text, type }) => (
    <button className="button" onClick={onClick}>
        <span className={`icon ${type}`} />
        {text && (
            <span className="text">
                {text}
            </span>
        )}
    </button>
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
