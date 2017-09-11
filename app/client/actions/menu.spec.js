import { toggle } from './menu';

describe('menu actions', () => {
    test('returns a toggle action', () => {
        expect(toggle()).toEqual({
            type: 'TOGGLE_MENU'
        });
    });
});
