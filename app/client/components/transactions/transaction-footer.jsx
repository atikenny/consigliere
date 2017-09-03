import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/icon-button';

const TransactionFooter = ({ isLabelsOpen, toggleLabels }) => (
    <div className="footer">
        <IconButton
            type="price-tags"
            isActive={isLabelsOpen}
            onClick={toggleLabels} />
    </div>
);

export default TransactionFooter;

TransactionFooter.propTypes = {
    isLabelsOpen: PropTypes.bool,
    toggleLabels: PropTypes.func
};
