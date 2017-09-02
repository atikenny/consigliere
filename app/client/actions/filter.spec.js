import { edit } from './filter';

describe('filter actions', () => {
    test('edit returns action object', () => {
        const filter = 'filter';

        expect(edit(filter)).toEqual({
            type: 'EDIT_FILTER',
            filter
        });
    });
});
