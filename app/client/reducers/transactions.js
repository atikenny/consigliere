const transactions = (state = [], action) => {
    switch (action) {
        case 'LOAD_TRANSACTIONS':
            return action.transactions;
        default:
            return state;
    }
};

export default transactions;
