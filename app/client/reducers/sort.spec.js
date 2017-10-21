import sort, { SORT_TYPES } from './sort';

describe('sort reducer', () => {
    test('sets initial state', () => {
        expect(sort(undefined, {})).toEqual(SORT_TYPES.DEFAULT);
    });

    test('handles sort by date action', () => {
        const initialState = SORT_TYPES.DEFAULT;
        const action = {
            type: 'SORT_BY_DATE'
        };

        expect(sort(initialState, action)).toEqual(SORT_TYPES.BY_DATE);
    });
});
