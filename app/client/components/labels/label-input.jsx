import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/text-input';

const LabelInput = ({ onChange, transactionId }) => (
    <div className="input-container">
        <input
            type="text"
            placeholder="enter label..."
            onChange={(event) => {
                onChange({
                    id: transactionId,
                    value: event.target.value
                })
            }} />
    </div>
);

export default LabelInput;

LabelInput.propTypes = {
    onChange: PropTypes.func
};
