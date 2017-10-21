import {
    byDate
} from './sort';

describe('sort actions', () => {
    test('byDate returns action object', () => {
        expect(byDate()).toEqual({
            type: 'SORT_BY_DATE'
        });
    });
});
