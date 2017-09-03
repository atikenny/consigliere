import { combineReducers } from 'redux';

import transactions from './transactions';
import currency from './currency';
import filter from './filter';
import suggestions from './suggestions';
import notification from './notification';

const appReducers = combineReducers({
    transactions,
    currency,
    filter,
    suggestions,
    notification
});

export default appReducers;
