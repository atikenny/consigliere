const hasLabel = (label, labels) => {
    return labels.some(_label => _label === label);
};

const item = (state, action) => {
    switch (action.type) {
        case 'ADD_LABEL':
            const labels = state.labels || [];

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
                items: action.transactions.slice()
            });
        case 'ADD_LABEL':
        case 'SET_NEW_LABEL_VALUE':
        case 'DELETE_LABEL':
            return Object.assign({}, state, {
                items: state.items.map(transaction => item(transaction, action))
            });
        case 'SET_FILTER':
            return Object.assign({}, state, {
                filter: action.filter
            });
        default:
            return state;
    }
};

export default transactions;
