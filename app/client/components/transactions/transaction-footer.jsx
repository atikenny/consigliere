import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/icon-button';
import Button from 'components/common/button';

const TransactionFooter = ({ isLabelsOpen, onSimilarCountClick, similarCount, toggleLabels }) => (
    <div className="footer">
        <IconButton
            type="price-tags"
            isActive={isLabelsOpen}
            onClick={toggleLabels} />
        {similarCount > 0 && (
            <Button
                onClick={onSimilarCountClick}
                text={`${similarCount} similar`} />
        )}
    </div>
);

export default TransactionFooter;

TransactionFooter.propTypes = {
    isLabelsOpen: PropTypes.bool,
    onSimilarCountClick: PropTypes.func,
    similarCount: PropTypes.number,
    toggleLabels: PropTypes.func
};
