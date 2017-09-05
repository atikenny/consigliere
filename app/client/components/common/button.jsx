import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/button';

const getClassName = (isFullSize) => {
    let className = 'button';

    if (isFullSize) {
        className += ` full-size`;
    }

    return className;
};

const Button = ({ isFullSize, onClick, text }) => (
    <button
        onClick={onClick}
        className={getClassName(isFullSize)}>{text}</button>
);

export default Button;

Button.propTypes = {
    isFullSize: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string
};
