import { toggle } from './modal';

describe('modal actions', () => {
    test('toggle returns action object', () => {
        const page = 'page';

        expect(toggle(page)).toEqual({
            type: 'TOGGLE_MODAL',
            page
        });
    });
});
