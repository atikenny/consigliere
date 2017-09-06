import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/common/icon-button';

const Controllers = ({
    isLabelsActive,
    isStatsActive,
    hideLabels,
    hideStats,
    showLabels,
    showStats
}) => (
    <div className="controllers">
        <IconButton
            isActive={isLabelsActive}
            type="price-tags"
            onClick={isLabelsActive ? hideLabels : showLabels} />
        <IconButton
            isActive={isStatsActive}
            type="stats-dots"
            onClick={isStatsActive ? hideStats : showStats} />
    </div>
);

export default Controllers;

Controllers.propTypes = {
    isLabelsActive: PropTypes.bool,
    isStatsActive: PropTypes.bool,
    hideLabels: PropTypes.func,
    hideStats: PropTypes.func,
    showLabels: PropTypes.func,
    showStats: PropTypes.func
};
