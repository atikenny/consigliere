import currency from './currency';

describe('currency reducer', () => {
    test('sets initial state', () => {
        const initialState = '£';

        expect(currency(undefined, {})).toEqual(initialState);
    });

    test('handles load currency action', () => {
        const initialState = 'initial state';
        const action = {
            type: 'SWITCH_CURRENCY',
            currency: 'new currency'
        };

        expect(currency(initialState, action)).toEqual('new currency');
    });
});
