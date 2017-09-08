import { show, hide } from './modal';

describe('modal actions', () => {
    test('show returns action object', () => {
        const page = 'page';

        expect(show(page)).toEqual({
            type: 'SHOW_MODAL',
            page
        });
    });

    test('hide returns action object', () => {
        expect(hide()).toEqual({
            type: 'HIDE_MODAL'
        });
    });
});
