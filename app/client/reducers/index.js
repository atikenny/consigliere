import { combineReducers } from 'redux';

import transactions from './transactions';
import currency from './currency';
import filter from './filter';
import suggestions from './suggestions';
import notification from './notification';
import modal from './modal';

const appReducers = combineReducers({
    transactions,
    currency,
    filter,
    suggestions,
    notification,
    modal
});

export default appReducers;
