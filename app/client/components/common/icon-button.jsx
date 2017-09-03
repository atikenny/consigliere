import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/icon-button';

const IconButton = ({ isActive, onClick, text, type }) => {
    let buttonClassName = 'button';

    if (isActive) {
        buttonClassName += ` active`;
    }

    return (
        <button className={buttonClassName} onClick={onClick}>
            <span className={`icon ${type}`} />
            {text && (
                <span className="text">
                    {text}
                </span>
            )}
        </button>
    )
};

export default IconButton;

IconButton.propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string
};
