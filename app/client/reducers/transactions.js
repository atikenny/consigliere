const initialState = {
    items: [],
    filter: ''
};

const transactions = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TRANSACTIONS':
            const newItems = action.transactions.filter(transaction => {
                return !state.items.some(item => item.id === transaction.id);
            });

            return Object.assign({}, state, {
                items: state.items.concat(newItems),
                isLabelsOpen: false
            });
        case 'DELETE_TRANSACTION':
            const transactionIndex = state.items.findIndex(
                transaction => transaction.id === action.id
            );

            return Object.assign({}, state, {
                items: [
                    ...state.items.slice(0, transactionIndex),
                    ...state.items.slice(transactionIndex + 1)
                ]
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
