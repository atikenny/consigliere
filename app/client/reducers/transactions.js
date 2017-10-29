import { filterTransactions } from 'selectors/transactions';

const item = (state, action) => {
    const labels = state.labels || [];
    let hasLabelAlready;

    switch (action.type) {
        case 'ADD_LABEL_MULTIPLE':
            hasLabelAlready = labels.includes(action.label);

            if (!action.ids.includes(state.id) || hasLabelAlready) {
                return state;
            }

            return Object.assign({}, state, {
                labels: labels.concat(action.label)
            });
        case 'REMOVE_LABEL_MULTIPLE':
            const labelIndex = labels.indexOf(action.label);
            
            hasLabelAlready = labelIndex !== -1;

            if (!action.ids.includes(state.id) || !hasLabelAlready) {
                return state;
            }

            return Object.assign({}, state, {
                labels: [
                    ...labels.slice(0, labelIndex),
                    ...labels.slice(labelIndex + 1)
                ]
            });
    }
};

const initialState = {
    items: [],
    filter: ''
};

const transactions = (state = initialState, action) => {
    let filteredItems;
    let filteredItemIds;

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
        case 'ADD_LABEL_MULTIPLE':
            filteredItems = filterTransactions(state.filter, state.items);
            filteredItemIds = filteredItems.map(transaction => transaction.id);

            action.ids = filteredItemIds;

            return Object.assign({}, state, {
                items: state.items.map(transaction => item(transaction, action))
            });
        case 'REMOVE_LABEL_MULTIPLE':
            filteredItems = filterTransactions(state.filter, state.items);
            filteredItemIds = filteredItems.map(transaction => transaction.id);

            action.ids = filteredItemIds;

            return Object.assign({}, state, {
                items: state.items.map(transaction => item(transaction, action))
            });
        default:
            return state;
    }
};

export default transactions;
