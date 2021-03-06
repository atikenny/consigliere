import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/common/icon-button';

const LabelItem = ({ name, onClick }) => (
    <div className="label">
        <span className="name">{name}</span>
        <IconButton type="cross" onClick={onClick} />
    </div>
);

export default LabelItem;

LabelItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
