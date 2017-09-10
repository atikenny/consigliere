import { mockCreateSelector } from 'test-helpers/redux/reselect';

import * as reselect from 'reselect';

describe('transactions selector', () => {
    beforeEach(() => {
        reselect.createSelector = mockCreateSelector();
    });

    test('isSuggestionOpen returns the state of the suggestion', () => {
        const isSuggestionOpen = require('./suggestions').isSuggestionOpen;
        const id = 'id';
        const isOpen = true;
        const suggestion = { id, isOpen };

        expect(isSuggestionOpen(suggestion)).toBe(isOpen);
    });
});
