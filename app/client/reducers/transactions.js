const transactions = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TRANSACTIONS':
            return action.transactions;
        default:
            return state;
    }
};

export default transactions;
