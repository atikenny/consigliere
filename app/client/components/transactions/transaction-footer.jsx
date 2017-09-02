import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/icon-button';

const TransactionFooter = ({ toggleLabels }) => (
    <div className="footer">
        <IconButton type="price-tags" onClick={toggleLabels} />
    </div>
);

export default TransactionFooter;

TransactionFooter.propTypes = {
    toggleLabels: PropTypes.func
};
