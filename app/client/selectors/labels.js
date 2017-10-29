import { createSelector } from 'reselect';

import { NO_LABEL_NAME } from 'constants/labels';

export const getLabels = (state) => state.labels;

export const getUniqueLabels = createSelector(
    [getLabels],
    (labels) => {
        const allLabels = labels.reduce((_allLabels, label) => {
            return _allLabels.concat(label.items || []);
        }, []);
        
        const uniqueLabels = Array.from(new Set(allLabels));
        
        uniqueLabels.push(NO_LABEL_NAME);

        return uniqueLabels;
    }
);