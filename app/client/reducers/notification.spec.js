import deepFreeze from 'deep-freeze';

import notification from './notification';

describe('notification reducer', () => {
    test('sets initial state', () => {
        expect(notification(undefined, {})).toEqual('');
    });

    test('handles show notification action', () => {
        const initialState = '';
        const action = {
            type: 'SHOW_NOTIFICATION',
            notification: 'new notification'
        };

        deepFreeze(initialState);

        expect(notification(initialState, action)).toEqual('new notification');
    });

    test('handles hide notification action', () => {
        const initialState = 'notification';
        const action = {
            type: 'HIDE_NOTIFICATION'
        };

        deepFreeze(initialState);

        expect(notification(initialState, action)).toEqual('');
    });
});
