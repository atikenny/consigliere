import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/text-input';
import { onSpecificKey } from 'services/keyboard-service';

const LabelInput = ({ onChange, onEnter }) => (
    <div className="input-container">
        <input
            type="text"
            placeholder="enter label..."
            onKeyDown={onSpecificKey('Enter', onEnter)}
            onChange={(event) => {
                onChange(event.target.value);
            }} />
    </div>
);

export default LabelInput;

LabelInput.propTypes = {
    onChange: PropTypes.func,
    onEnter: PropTypes.func
};
