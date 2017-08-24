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

const transactions = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TRANSACTIONS':
            return action.transactions.slice();
        case 'ADD_LABEL':
            return state.map(transaction => item(transaction, action));
        case 'SET_NEW_LABEL_VALUE':
            return state.map(transaction => item(transaction, action));
        case 'DELETE_LABEL':
            return state.map(transaction => item(transaction, action));
        default:
            return state;
    }
};

export default transactions;
