import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/input-icon-button';
import IconButton from 'components/common/icon-button';

const InputIconButton = ({
    buttonType,
    inputClassName,
    onChange,
    onClick,
    onKeyDown,
    placeholder
}) => (
    <div className="input-icon-button">
        <input
            type="text"
            className={inputClassName}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder} />
        <IconButton
            type={buttonType}
            onClick={onClick} />
    </div>
);

export default InputIconButton;

InputIconButton.propTypes = {
    buttonType: PropTypes.string,
    inputClassName: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string
};
