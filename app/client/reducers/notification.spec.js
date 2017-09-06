import deepFreeze from 'deep-freeze';

import notification from './notification';

describe('notification reducer', () => {
    test('sets initial state', () => {
        expect(notification(undefined, {})).toEqual({
            show: false,
            text: ''
        });
    });

    test('handles show notification action', () => {
        const initialState = {
            show: false,
            text: ''
        };
        const action = {
            type: 'SHOW_NOTIFICATION',
            text: 'new notification'
        };

        deepFreeze(initialState);

        expect(notification(initialState, action)).toEqual({
            show: true,
            text: 'new notification'
        });
    });

    test('handles hide notification action', () => {
        const initialState = {
            show: true,
            text: 'notification'
        };
        const action = {
            type: 'HIDE_NOTIFICATION'
        };

        deepFreeze(initialState);

        expect(notification(initialState, action)).toEqual({
            show: false,
            text: 'notification'
        });
    });
});
