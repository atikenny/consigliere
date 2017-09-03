import { show } from './modal';

describe('modal actions', () => {
    test('show returns action object', () => {
        const page = 'page';

        expect(show(page)).toEqual({
            type: 'SHOW_MODAL',
            page
        });
    });
});
