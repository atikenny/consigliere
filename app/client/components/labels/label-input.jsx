import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/text-input';
import { onSpecificKey } from 'services/keyboard-service';
import InputIconButton from 'components/common/input-icon-button';

const LabelInput = ({ onChange, onClick, onEnter }) => (
    <InputIconButton
        buttonType="plus"
        placeholder="enter label..."
        onKeyDown={onSpecificKey('Enter', onEnter)}
        onChange={(event) => {
            onChange(event.target.value);
        }}
        onClick={onClick} />
);

export default LabelInput;

LabelInput.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onEnter: PropTypes.func
};
