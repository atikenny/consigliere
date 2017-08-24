import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/icon-button';

const LabelItem = ({ name, onClick, transactionId }) => (
    <div className="label">
        <span className="name">{name}</span>
        <IconButton type="cross" onClick={onClick} />
    </div>
);

export default LabelItem;

LabelItem.defaultProps = {
    onClick: () => {},
    transactionId: undefined
};

LabelItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    transactionId: PropTypes.number
};
