import { combineReducers } from 'redux';

import transactions from './transactions';
import currency from './currency';

const appReducers = combineReducers({
    transactions,
    currency
});

export default appReducers;
