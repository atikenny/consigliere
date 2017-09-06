import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/icon-button';

const getContainerClassName = (isActive) => {
    let buttonClassName = 'button';

    if (isActive) {
        buttonClassName += ` active`;
    }

    return buttonClassName;
};

const IconButton = ({ isActive, onClick, text, type }) => (
    <button className={getContainerClassName(isActive)} onClick={onClick}>
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
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string
};
