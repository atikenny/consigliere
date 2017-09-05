import { filterTransactions } from 'selectors/transactions';

const hasLabel = (label, labels) => {
    return labels.some(_label => _label === label);
};

const item = (state, action) => {
    const labels = state.labels || [];

    switch (action.type) {
        case 'ADD_LABEL':
            if (state.id !== action.id) {
                return state;
            }

            if (hasLabel(state.newLabelValue, labels)) {
                return state;
            }

            if (!state.newLabelValue) {
                return state;
            }

            return Object.assign({}, state, {
                labels: labels.concat(state.newLabelValue)
            });
        case 'DELETE_LABEL':
            if (state.id !== action.transactionId) {
                return state;
            }

            return Object.assign({}, state, {
                labels: state.labels.filter(label => label !== action.label)
            });
        case 'SET_NEW_LABEL_VALUE':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                newLabelValue: action.value
            });
        case 'TOGGLE_LABELS':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                isLabelsOpen: !state.isLabelsOpen
            });
        case 'ADD_LABEL_MULTIPLE':
            if (!action.ids.includes(state.id)) {
                return state;
            }

            return Object.assign({}, state, {
                labels: labels.concat(action.label)
            });
        default:
            return state;
    }
};

const initialState = {
    items: [],
    filter: ''
};

const transactions = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TRANSACTIONS':
            return Object.assign({}, state, {
                items: action.transactions.slice(),
                isLabelsOpen: false
            });
        case 'ADD_LABEL':
        case 'SET_NEW_LABEL_VALUE':
        case 'DELETE_LABEL':
        case 'TOGGLE_LABELS':
            return Object.assign({}, state, {
                items: state.items.map(transaction => item(transaction, action))
            });
        case 'SET_FILTER':
            return Object.assign({}, state, {
                filter: action.filter
            });
        case 'ADD_LABEL_MULTIPLE':
            const filteredItems = filterTransactions(state.filter, state.items);
            const filteredItemIds = filteredItems.map(transaction => transaction.id);

            action.ids = filteredItemIds;

            return Object.assign({}, state, {
                items: state.items.map(transaction => item(transaction, action))
            });
        default:
            return state;
    }
};

export default transactions;
