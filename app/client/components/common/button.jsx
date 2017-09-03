import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => (
    <button
        onClick={onClick}
        className="button">{text}</button>
);

export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
};
