import * as redux from 'redux';

import * as transactions from './transactions';
import * as currency from './currency';
import * as filter from './filter';
import * as suggestions from './suggestions';
import * as notification from './notification';
import * as modal from './modal';
import * as menu from './menu';
import * as sort from './sort';
import * as labels from './labels';

describe('reducers', () => {
    test('combining reducers', () => {
        // GIVEN
        redux.combineReducers = jest.fn(() => 'combined reducers');
        transactions.default = 'transactions';
        currency.default = 'currency';
        filter.default = 'filter';
        suggestions.default = 'suggestions';
        notification.default = 'notification';
        modal.default = 'modal';
        menu.default = 'menu';
        sort.default = 'sort';
        labels.default = 'labels';

        // WHEN
        const appReducers = require('./index').default;

        // THEN
        expect(appReducers).toEqual('combined reducers');
        expect(redux.combineReducers).toHaveBeenCalledWith({
            transactions: 'transactions',
            currency: 'currency',
            filter: 'filter',
            suggestions: 'suggestions',
            notification: 'notification',
            modal: 'modal',
            menu: 'menu',
            sort: 'sort',
            labels: 'labels'
        });
    });
});
