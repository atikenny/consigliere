import * as reselect from 'reselect';
import { mockCreateSelector } from 'test-helpers/redux/reselect';

import { NO_LABEL_NAME } from 'constants/labels';

describe('labels selector', () => {
    beforeEach(() => {
        reselect.createSelector = mockCreateSelector();
    });

    test('getUniqueLabels returns unique labels', () => {
        const getUniqueLabels = require('./labels').getUniqueLabels;
        const labels = [
            {},
            { items: [] },
            { items: ['label 1', 'label 2'] },
            { items: ['label 2'] }
        ];

        expect(getUniqueLabels(labels)).toEqual(['label 1', 'label 2', NO_LABEL_NAME]);
    });
});
