const item = (state, action) => {
    switch (action.type) {
        case 'ADD_LABEL':
            if (state.id !== action.id) {
                return state;
            }

            const labels = state.labels || [];

            return Object.assign({}, state, {
                labels: labels.concat(action.label)
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
        default:
            return state;
    }
};

export default transactions;
