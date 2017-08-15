const transactions = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TRANSACTIONS':
            return action.transactions.slice();
        default:
            return state;
    }
};

export default transactions;
