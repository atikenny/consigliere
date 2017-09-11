import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/icon-button';

const getContainerClassName = (className, isActive) => {
    let buttonClassName = 'button';

    if (isActive) {
        buttonClassName += ` active`;
    }

    if (className) {
        buttonClassName += ` ${className}`;
    }

    return buttonClassName;
};

const IconButton = ({ className, isActive, onClick, text, type }) => (
    <button className={getContainerClassName(className, isActive)} onClick={onClick}>
        <span className={`icon ${type}`} />
        {text && (
            <span className="text">
                {text}
            </span>
        )}
    </button>
);

export default IconButton;

IconButton.propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string
};
