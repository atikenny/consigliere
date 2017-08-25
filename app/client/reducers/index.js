import { combineReducers } from 'redux';

import transactions from './transactions';
import currency from './currency';
import filter from './filter';

const appReducers = combineReducers({
    transactions,
    currency,
    filter
});

export default appReducers;
