import * as redux from 'redux';

import * as transactions from './transactions';
import * as currency from './currency';

describe('reducers', () => {
    test('combining reducers', () => {
        // GIVEN
        redux.combineReducers = jest.fn(() => 'combined reducers');
        transactions.default = 'transactions';
        currency.default = 'currency';

        // WHEN
        const appReducers = require('./index').default;

        // THEN
        expect(appReducers).toEqual('combined reducers');
        expect(redux.combineReducers.mock.calls.length).toBe(1);
        expect(redux.combineReducers.mock.calls[0]).toEqual([{
            transactions: 'transactions',
            currency: 'currency'
        }]);
    });
});