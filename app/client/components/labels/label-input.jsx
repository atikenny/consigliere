import React from 'react';
import PropTypes from 'prop-types';

import 'styles/input';

const LabelInput = ({ onChange, transactionId }) => (
    <div className="input-container">
        <input type="text" onChange={(event) => {
            onChange({
                id: transactionId,
                value: event.target.value
            })
        }} />
    </div>
);

export default LabelInput;

LabelInput.defaultProps = {
    onChange: () => {}
};

LabelInput.propTypes = {
    onChange: PropTypes.func
};
