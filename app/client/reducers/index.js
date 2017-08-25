import { combineReducers } from 'redux';

import transactions from './transactions';
import currency from './currency';
import filter from './filter';
import suggestions from './suggestions';

const appReducers = combineReducers({
    transactions,
    currency,
    filter,
    suggestions
});

export default appReducers;
